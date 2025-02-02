import React, { useRef } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { ChatSection, Container, InputSection } from './style';
import { ChangeEvent, useEffect, useState } from 'react';
import { Message } from '../../../models/ChatData.type';
import { Client } from '@stomp/stompjs';
import MessageCard from '../MessageCard';
import { useChatHistory } from '../../../hooks/Post/useChatHistory';

const Chat: React.FC = () => {
  const stompClient = useRef<Client | null>(null);

  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [chat, setChat] = useState<string>(``);

  const roomId = 1;
  const WS_URL = import.meta.env.VITE_WEBSOCKET_URL;
  const token = localStorage.getItem('accessToken') ?? '';

  const { data } = useChatHistory(roomId, token);

  useEffect(() => {
    // Stomp 클라이언트 생성
    const client = new Client({
      brokerURL: WS_URL,
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      console.log('WebSocket 연결 성공');
      // 채팅방 구독
      client.subscribe(`/room/${roomId}`, (message) => {
        const parsedMessage: Message = JSON.parse(message.body);
        setChatHistory((chatHistory) => [parsedMessage, ...chatHistory]);
      });
    };

    client.activate();
    stompClient.current = client;

    // 언마운트 시 연결 해제
    return () => {
      if (stompClient.current?.connected) {
        stompClient.current.deactivate();
        console.log('WebSocket 연결 해제');
      }
    };
  }, []);

  useEffect(() => {
    if (data) {
      setChatHistory(data);
    }
  }, [data]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setChat(e.target.value);
  };

  const handleEnterKey = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = (): void => {
    if (!chat.trim()) {
      return;
    }

    if (stompClient.current?.connected) {
      stompClient.current.publish({
        destination: `/send/chat/${roomId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ senderId: 1, content: chat }),
      });
      console.log('보낸 메시지:', chat);
    }

    setChat('');
  };

  // return (
  //   <Container>
  //     <ChatSection>
  //       {chatHistory.map((message, index) => (
  //         <MessageCard key={index} {...message} />
  //       ))}
  //     </ChatSection>
  //     <InputSection>
  //       <textarea
  //         value={chat}
  //         onChange={handleChange}
  //         onKeyDown={handleEnterKey}
  //       />
  //       <BsArrowUpCircleFill onClick={handleSend} />
  //     </InputSection>
  //   </Container>
  // );
  return (
    <Container>
      <ChatSection>
        {chatHistory?.map &&
          chatHistory.map((message, index) => (
            <MessageCard key={index} {...message} />
          ))}
      </ChatSection>
      <InputSection>
        <textarea
          value={chat}
          onChange={handleChange}
          onKeyDown={handleEnterKey}
        />
        <BsArrowUpCircleFill onClick={handleSend} />
      </InputSection>
    </Container>
  );
};

export default Chat;
