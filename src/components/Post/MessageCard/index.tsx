import React from 'react';
import { Message } from '../../../models/ChatData.type';
import { Container, Content, ProfileImage, Time } from './style';

const MessageCard: React.FC<Message> = ({
  userId,
  profileImage,
  name,
  content,
  time,
}) => {
  // 임시 함수: userId를 가공하거나 기본 출력용으로 활용
  const getUserIdDisplay = (id: string | number) => {
    return `User: ${id}`;
  };

  return (
    <Container>
      <ProfileImage src={profileImage}></ProfileImage>
      <Content>
        <p>{name}</p>
        <div>{content}</div>
        {/* userId를 출력하는 경우 */}
        <p>{getUserIdDisplay(userId)}</p>
      </Content>
      <Time>{time}</Time>
    </Container>
  );
};

export default MessageCard;
