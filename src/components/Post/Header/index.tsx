import React from 'react';
import { PostHeader } from '../../../models/PostHeader.type';
import { deletePost } from '../../../apis/postInstance';
import { BsTrashFill, BsThreeDotsVertical } from 'react-icons/bs';
import {
  Board,
  Container,
  DeleteButton,
  EditButton,
  Info,
  Post,
  Title,
} from './style';

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
        <EditButton onClick={handleEditButton}>
          <BsThreeDotsVertical size="1.5rem" />
        </EditButton>
      </Info>
      <DeleteButton onClick={handleDeleteButton}>
        <BsTrashFill size="1.5rem" />
      </DeleteButton>
    </Container>
  );
};

export default Header;
