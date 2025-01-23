import React from 'react';
import styled from '@emotion/styled';
import {BsTrashFill,BsThreeDotsVertical} from 'react-icons/bs';

function Header() {
  return (

    <Container>
        <Info>
          <Title>
            <Board>9oorm_KDT</Board>
            <Post>[FE] 모달창 컴포넌트 만들기</Post>
          </Title>
          <EditButton />
        </Info>
        <DeleteButton />
      </Container>
  )
}

export default Header;

const Container=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

const Info=styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  /* background-color: green; */
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px; /* 요소 간 간격 제어 */
`;

const Board = styled.p`
    color: var(--bc-light-gray);
    font: var(--font-board-name);
    margin: 0; /* 기본 마진 제거 */

    font-family: "Pretendard Variable";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Post = styled.p`
    color: var(--bc-white);
    margin: 0; /* 기본 마진 제거 */

    text-shadow: 0px 0px 4px var(--bc_black, #161616);
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;


const EditButton=styled(BsThreeDotsVertical)`
    color: var(--bc-light-gray);
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
`;

const DeleteButton=styled(BsTrashFill)`
    color: var(--bc-gray);
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
`;