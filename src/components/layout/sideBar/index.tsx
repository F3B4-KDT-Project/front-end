import React, { useState } from 'react';
import { SideBar, AddButton, ProfileButton, BoardItem } from './style';
import { IoIosAdd } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import AddBoardModal from '../../modals/AddBoardModal';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boards, setBoards] = useState<string[]>([]);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBoard = (boardName: string) => {
    const truncatedName =
      boardName.length > 5 ? `${boardName.slice(0, 5)}...` : boardName;
    setBoards([truncatedName, ...boards]); // 새로운 게시판을 맨 위에 추가
  };

  return (
    <SideBar>
      <div>
        {boards.map((board, index) => (
          <BoardItem key={index}>{board}</BoardItem>
        ))}
        <AddButton onClick={handleAddClick}>
          <IoIosAdd className="AddIcon" />
        </AddButton>
      </div>
      <ProfileButton onClick={() => navigate('/my-page')}>
        <BsFillPersonFill className="ProfileIcon" />
      </ProfileButton>
      {isModalOpen && (
        <AddBoardModal onClose={handleCloseModal} onAddBoard={handleAddBoard} />
      )}
    </SideBar>
  );
};

export default Sidebar;
