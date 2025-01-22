import { Message } from '../../../models/MessageData.type';
import { Container, Content, ProfileImage, Time } from './style';

const MessageCard: React.FC<Message> = ({
  userId,
  profileImage,
  name,
  content,
  time,
}) => {
  return (
    <Container>
      <ProfileImage src={profileImage}></ProfileImage>
      <Content>
        <p>{name}</p>
        <div>{content}</div>
      </Content>
      <Time>{time}</Time>
    </Container>
  );
};

export default MessageCard;
