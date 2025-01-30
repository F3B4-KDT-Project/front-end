import React, { useRef } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { ChatSection, Container, InputSection } from './style';
import { ChangeEvent, useEffect, useState } from 'react';
import { Message } from '../../../models/ChatData.type';
import { Client } from '@stomp/stompjs';
import MessageCard from '../MessageCard';
import axios from 'axios';

const Chat: React.FC = () => {
  const stompClient = useRef<Client | null>(null);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [chat, setChat] = useState<string>(``);
  const user = { id: 3, name: '정윤석' };
  const roomId = 1;
  const WS_URL = import.meta.env.VITE_WEBSOCKET_URL;

  useEffect(() => {
    fetchChatHistory();

    // Stomp 클라이언트 생성
    const client = new Client({
      brokerURL: WS_URL,
      connectHeaders: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwibG9naW5JZCI6InRlc3QxIiwicm9sZSI6WyJVU0VSIl0sImV4cCI6MTczODIwNzMxMSwiaWF0IjoxNzM4MjAzNzExfQ.q-4uhPUH6dUrXc9zuD_b1LdRFlkXtdC4F9yhc_HMgYA',
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
        console.log('받은 메세지:', JSON.parse(message.body));
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

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/chat/${roomId}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwibG9naW5JZCI6InRlc3QxIiwicm9sZSI6WyJVU0VSIl0sImV4cCI6MTczODIwNzMxMSwiaWF0IjoxNzM4MjAzNzExfQ.q-4uhPUH6dUrXc9zuD_b1LdRFlkXtdC4F9yhc_HMgYA`,
            'Content-Type': 'application/json',
          },
        }
      );
      setChatHistory(response.data);
    } catch (err: any) {
      console.error(err);
    }
  };

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
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwibG9naW5JZCI6InRlc3QxIiwicm9sZSI6WyJVU0VSIl0sImV4cCI6MTczODIwNzMxMSwiaWF0IjoxNzM4MjAzNzExfQ.q-4uhPUH6dUrXc9zuD_b1LdRFlkXtdC4F9yhc_HMgYA',
        },
        body: JSON.stringify({ senderId: 1, content: chat }),
      });
      console.log('보낸 메시지:', chat);
    }

    const newChat: Message = {
      senderId: user.id,
      memberProfileImageUrl: `https://ide-project-bucket.s3.ap-northeast-2.amazonaws.com/profile-image/4510b03e-aded-43f1-b063-ccda7c734681_79516d5a-bdb1-4fbd-918e-6c56a38705c75070529700289430514_코에듀_기본_프로필.png`,
      memberNickname: user.name,
      messageText: chat,
      sendTime: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    };

    setChatHistory((chatHistory) => [...chatHistory, newChat]);
    setChat('');
  };

  return (
    <Container>
      <ChatSection>
        {chatHistory.map((message, index) => (
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
