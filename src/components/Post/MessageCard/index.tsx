import React from 'react';
import { Message } from '../../../models/ChatData.type';
import { Container, Content, ProfileImage, Time } from './style';

const MessageCard = ({
  userId,
  profileImage,
  name,
  content,
  time,
}: Message) => {
  // 임시 user data
  const user_id = 1;

  return (
    <Container>
      <ProfileImage src={profileImage} alt="profile image" />
      <Content>
        <p>{name}</p>
        <div>{content}</div>
      </Content>
      <Time>{time}</Time>
    </Container>
  );
};

export default MessageCard;
