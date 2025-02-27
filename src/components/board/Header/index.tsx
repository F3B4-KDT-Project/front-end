import React, { useState } from 'react';
import { BsTrashFill, BsThreeDotsVertical } from 'react-icons/bs';
import EditBoardModal from '../../modals/EditBoardModal';
import AddScheduleModal from '../../modals/AddScheduleModal';
import AddPostModal from '../../modals/AddPostModal';
import {
  Board,
  Container,
  CreateButton,
  DeleteButton,
  EditButton,
  Info,
  Title,
} from './style';

const Header: React.FC<{ boardName: string }> = ({ boardName }) => {
  const [isEditBoardModalOpen, setEditBoardModalOpen] = useState(false);
  const [isAddScheduleModalOpen, setAddScheduleModalOpen] = useState(false);
  const [isAddPostModalOpen, setAddPostModalOpen] = useState(false);

  return (
    <Container>
      <Info>
        <Title>
          <Board>{boardName}</Board>
        </Title>
        <EditButton onClick={() => setEditBoardModalOpen(true)}>
          <BsThreeDotsVertical size="1.5rem" />
        </EditButton>
        <DeleteButton onClick={() => setAddScheduleModalOpen(true)}>
          <BsTrashFill size="1.5rem" />
        </DeleteButton>
      </Info>
      <CreateButton onClick={() => setAddPostModalOpen(true)}>
        수업 생성
      </CreateButton>

      {/* 모달 컴포넌트 */}
      <EditBoardModal
        isOpen={isEditBoardModalOpen}
        onClose={() => setEditBoardModalOpen(false)}
      />
      <AddScheduleModal
        isOpen={isAddScheduleModalOpen}
        onClose={() => setAddScheduleModalOpen(false)}
      />
      <AddPostModal
        isOpen={isAddPostModalOpen}
        onClose={() => setAddPostModalOpen(false)}
      />
    </Container>
  );
};

export default Header;
