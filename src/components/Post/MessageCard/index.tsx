import React from 'react';
import { Message } from '../../../models/ChatData.type';
import { Container, Content, ProfileImage, Time } from './style';

const MessageCard: React.FC<Message> = ({
  memberId,
  profileImage,
  name,
  messageText,
  sendTime,
}) => {
  // 임시 함수: memberId를 가공하거나 기본 출력용으로 활용
  const getMemberIdDisplay = (id: string | number) => {
    return `User: ${id}`;
  };

  return (
    <Container>
      <ProfileImage src={profileImage}></ProfileImage>
      <Content>
        <p>{name}</p>
        <div>{messageText}</div>
        {/* userId를 출력하는 경우 */}
        <p>{getMemberIdDisplay(memberId)}</p>
      </Content>
      <Time>{sendTime}</Time>
    </Container>
  );
};

export default MessageCard;
