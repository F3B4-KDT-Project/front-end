import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BsTrashFill, BsThreeDotsVertical } from 'react-icons/bs';
import EditBoardModal from '../modals/EditBoardModal';
import DeleteBoardModal from '../modals/DeleteBoardModal';
import AddPostModal from '../modals/AddPostModal';

interface BoardHeader {
  boardName: string;
}

const Header: React.FC<BoardHeader> = ({ boardName }) => {
  const [isEditBoardModalOpen, setEditBoardModalOpen] = useState(false);
  const [isDeleteBoardModalOpen, setDeleteBoardModalOpen] = useState(false);
  const [isAddPostModalOpen, setAddPostModalOpen] = useState(false);

  return (
    <Container>
      <Info>
        <Title>
          <Board>{boardName}</Board>
        </Title>
        <EditButton onClick={() => setEditBoardModalOpen(true)} />
        <DeleteButton onClick={() => setDeleteBoardModalOpen(true)} />
      </Info>
      <CreateButton onClick={() => setAddPostModalOpen(true)}>
        수업 생성
      </CreateButton>

      {/* 모달 컴포넌트 */}
      <EditBoardModal
        isOpen={isEditBoardModalOpen}
        onClose={() => setEditBoardModalOpen(false)}
      />
      <DeleteBoardModal
        isOpen={isDeleteBoardModalOpen}
        onClose={() => setDeleteBoardModalOpen(false)}
      />
      <AddPostModal
        isOpen={isAddPostModalOpen}
        onClose={() => setAddPostModalOpen(false)}
      />
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
  margin-right: 1.19rem;
`;

const Board = styled.p`
  color: var(--white);
  margin: 0; /* 기본 마진 제거 */

  text-shadow: 0px 0px 4px var(--black);
  font-family: 'Pretendard';
  font-size: 4.0625rem;
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
  color: var(--light-gray);
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const CreateButton = styled.button`
  color: var(--white);
  text-align: center;
  font-family: 'Pretendard';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 9.92306rem;
  height: 3.25rem;
  flex-shrink: 0;
  border: none;
  border-radius: 3.125rem;
  background: var(--gray);

  margin-top: 3rem;

  &:hover {
    background: var(--black);
  }
`;
