import React from 'react';
import styled from '@emotion/styled';
import { BsTrashFill,BsThreeDotsVertical } from 'react-icons/bs';

interface PostHeader{
  boardName : string;
  postName : string;
}

const Header:React.FC<PostHeader> = ({ boardName, postName }) => {
  return (

    <Container>
        <Info>
          <Title>
            <Board>{boardName}</Board>
            <Post>{postName}</Post>
          </Title>
          <EditButton />
        </Info>
        <DeleteButton />
      </Container>
  )
};

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
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.31rem; 
`;

const Board = styled.p`
    color: var(--light-gray);
    margin: 0; /* 기본 마진 제거 */

    font-family: "Pretendard Variable";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Post = styled.p`
    color: var(--white);
    margin: 0; /* 기본 마진 제거 */

    text-shadow: 0px 0px 4px var(--black, #161616);
    font-family: "Pretendard Variable";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;


const EditButton=styled(BsThreeDotsVertical)`
    color: var(--light-gray);
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
`;

const DeleteButton=styled(BsTrashFill)`
    color: var(--gray);
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;

    margin-top: 3rem;
`;