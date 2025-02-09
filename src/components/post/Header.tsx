import React from 'react';
import styled from '@emotion/styled';
import { PostHeader } from '../../models/PostHeader.type';

import { deletePost } from '../../apis/postInstance';

import { BsTrashFill, BsThreeDotsVertical } from 'react-icons/bs';

const Header: React.FC<PostHeader> = ({ boardId, postId }) => {
  const handleEditButton = () => {
    /* 추후 api 연동 */
    alert('수정하기 버튼을 눌렀습니다.');
  };

  const handleDeleteButton = async () => {
    try {
      const postData = { boardId, postId };
      const response = await deletePost(postData);
      console.log('[ API ] Delete Post : ', response);
      alert('[ API ] Delete Post');
    } catch (error) {
      console.error('[ 🚨 Error ] API Delete post fail : ', error);
      alert('[ 🚨 Error ] API Delete post fail');
    }
  };

  return (
    <Container>
      <Info>
        <Title>
          <Board>{boardId}</Board>
          <Post>{postId}</Post>
        </Title>
        <EditButton onClick={handleEditButton} />
      </Info>
      <DeleteButton onClick={handleDeleteButton} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

const Info = styled.div`
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

  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Post = styled.p`
  color: var(--white);
  margin: 0; /* 기본 마진 제거 */

  text-shadow: 0px 0px 4px var(--black, #161616);
  font-family: 'Pretendard Variable';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EditButton = styled(BsThreeDotsVertical)`
  color: var(--light-gray);
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const DeleteButton = styled(BsTrashFill)`
  color: var(--gray);
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;

  margin-top: 3rem;
`;
