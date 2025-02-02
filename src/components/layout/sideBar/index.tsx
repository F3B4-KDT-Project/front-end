import React, { useState } from 'react';
import { SideBar, AddButton, ProfileButton, BoardItem } from './style';
import { IoIosAdd } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import AddBoardModal from '../../modals/AddBoardModal';

const Sidebar: React.FC = () => {
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

  const handleProfileClick = () => {};

  const hiddenPaths: string[] = ['/sign-in', '/sign-up'];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

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
      <ProfileButton onClick={handleProfileClick}>
        <BsFillPersonFill className="ProfileIcon" />
      </ProfileButton>
      {isModalOpen && (
        <AddBoardModal onClose={handleCloseModal} onAddBoard={handleAddBoard} />
      )}
    </SideBar>
  );
};

export default Sidebar;
