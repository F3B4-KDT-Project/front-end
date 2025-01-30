import React, { useState } from 'react';
import { SideBar, AddButton, ProfileButton } from './style';
import { IoIosAdd } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import AddBoardModal from '../../modals/AddBoardModal';

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('모달 닫기 클릭됨!');

    setIsModalOpen(false);
  };

  const handleProfileClick = () => {};

  const hiddenPaths: string[] = ['/sign-in', '/sign-up'];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <SideBar>
      <AddButton onClick={handleAddClick}>
        <IoIosAdd className="AddIcon" />
      </AddButton>

      <ProfileButton onClick={handleProfileClick}>
        <BsFillPersonFill className="ProfileIcon" />
      </ProfileButton>
      {isModalOpen && <AddBoardModal onClose={handleCloseModal} />}
    </SideBar>
  );
};

export default Sidebar;
