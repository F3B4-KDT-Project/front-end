import { Message } from '../../../models/ChatData.type';
import { Container, Content, ProfileImage, Time } from './style';

const MessageCard = ({
  memberId,
  profileImage,
  name,
  messageText,
  sendTime,
}: Message) => {
  // 임시 user data
  const user_id = 3;

  const isMyMessage = memberId == user_id;

  return (
    <Container isMyMessage={isMyMessage}>
      <ProfileImage src={profileImage} alt="profile image" />
      <Content isMyMessage={isMyMessage}>
        <p>{name}</p>
        <div>{messageText}</div>
      </Content>
      <Time>{sendTime}</Time>
    </Container>
  );
};

export default MessageCard;
