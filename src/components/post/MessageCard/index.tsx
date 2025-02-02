import { useUserProfile } from '../../../hooks/Auth/useUserProfile';
import { Message } from '../../../models/ChatData.type';
import {
  Container,
  Content,
  ProfileImage,
  SkeletonContainer,
  SkeletonProfileImage,
  Spacer,
  Time,
} from './style';

const MessageCard = ({
  senderId,
  memberProfileImageUrl,
  memberNickname,
  messageText,
  sendTime,
}: Message) => {
  const { data, isLoading } = useUserProfile();

  if (isLoading) {
    return (
      <SkeletonContainer>
        <SkeletonProfileImage />
      </SkeletonContainer>
    );
  }

  const isMyMessage = senderId === data?.memberId;

  return (
    <Container isFlexRight={isMyMessage}>
      <ProfileImage src={memberProfileImageUrl} alt="profile image" />
      <Content isFlexRight={isMyMessage}>
        <p>{memberNickname}</p>
        <div>{messageText}</div>
      </Content>
      <Time>{sendTime.split(' ')[1].slice(0, 5)}</Time>
      <Spacer />
    </Container>
  );
};

export default MessageCard;
