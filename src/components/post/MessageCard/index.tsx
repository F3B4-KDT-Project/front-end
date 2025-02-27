import { MessageCardProps } from '../../../models/ChatData.type';
import { Container, Content, ProfileImage, Spacer, Time } from './style';

const MessageCard = ({
  memberProfileImageUrl,
  memberNickname,
  messageText,
  sendTime,
  isMyMessage,
  type,
}: MessageCardProps) => {
  return (
    <Container isFlexRight={isMyMessage}>
      <ProfileImage src={memberProfileImageUrl} alt="profile image" />
      <Content isFlexRight={isMyMessage}>
        <p>{memberNickname}</p>
        {type === 'text' ? (
          <div>{messageText}</div>
        ) : (
          <img src={messageText} alt="sent image" />
        )}
      </Content>
      <Time>{sendTime.split(' ')[1].slice(0, 5)}</Time>
      <Spacer />
    </Container>
  );
};

export default MessageCard;
