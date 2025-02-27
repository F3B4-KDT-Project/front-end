import React from 'react';
import { BsFillEmojiWinkFill } from 'react-icons/bs';
import { EmptyBoardContainer, Message, Description } from './style';

const EmptyBoardPage: React.FC = () => {
  return (
    <EmptyBoardContainer>
      <BsFillEmojiWinkFill size="12.5rem" />
      <Message>
        아직 <strong>교실</strong>이 없어요.
      </Message>
      <Description>
        교실을 만들려면 <strong>좌측 상단의 + 버튼</strong>을 눌러주세요!!
      </Description>
    </EmptyBoardContainer>
  );
};

export default EmptyBoardPage;
