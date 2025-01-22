import { BsArrowUpCircleFill } from 'react-icons/bs';
import { ChatSection, Container, InputSection } from './style';

const Chat = () => {
  return (
    <Container>
      <ChatSection></ChatSection>
      <InputSection>
        <input type="text" />
        <BsArrowUpCircleFill />
      </InputSection>
    </Container>
  );
};

export default Chat;
