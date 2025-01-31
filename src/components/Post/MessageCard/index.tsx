import { Message } from '../../../models/ChatData.type';
import { Container, Content, ProfileImage, Time } from './style';

const MessageCard = ({
  senderId,
  memberProfileImageUrl,
  memberNickname,
  messageText,
  sendTime,
}: Message) => {
  // 임시 user data
  const user_id = 3;

  const isMyMessage = senderId == user_id;

  return (
    <Container isMyMessage={isMyMessage}>
      <ProfileImage src={memberProfileImageUrl} alt="profile image" />
      <Content isMyMessage={isMyMessage}>
        <p>{memberNickname}</p>
        <div>{messageText}</div>
      </Content>
      <Time>{sendTime}</Time>
    </Container>
  );
};

export default MessageCard;
