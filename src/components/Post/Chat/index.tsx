import { BsArrowUpCircleFill } from 'react-icons/bs';
import { ChatSection, Container, InputSection } from './style';
import { ChangeEvent, useEffect, useState } from 'react';
import { Message } from '../../../models/ChatData.type';
import MessageCard from '../MessageCard';

const Chat: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [chat, setChat] = useState<string>(``);
  const [user, setUser] = useState({ id: '', name: '' });

  useEffect(() => {
    // 더미데이터 추가 (추후 채팅 내역 api로 요청 예정)
    const dummyChatHistory: Message[] = [
      {
        userId: '1',
        profileImage: 'https://picsum.photos/200/300?random=1',
        name: '한채연',
        content: '아니 진짜?',
        time: '19:28',
      },
      {
        userId: '2',
        profileImage: 'https://picsum.photos/200/300?random=2',
        name: '한승우',
        content: '진짜 가능?',
        time: '19:34',
      },
    ];

    // 더미데이터 추가 (추후 auth 전역 관리 시 계정 정보 받아올 예정)
    setUser({ id: '3', name: '정윤석' });

    setChatHistory(dummyChatHistory);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setChat(e.target.value);
  };

  const handleSend = (): void => {
    const newChat: Message = {
      userId: user.id,
      profileImage: `https://picsum.photos/200/300?random=${user.id}`,
      name: user.name,
      content: chat,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    };

    setChatHistory((chatHistory) => [...chatHistory, newChat]); // 배열 뒤에 추가
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
        <input type="text" value={chat} onChange={handleChange} />
        <BsArrowUpCircleFill onClick={handleSend} />
      </InputSection>
    </Container>
  );
};

export default Chat;
