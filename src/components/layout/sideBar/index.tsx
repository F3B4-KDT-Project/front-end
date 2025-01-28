import React from "react";
import { SideBar, AddButton, ProfileButton } from "./style";

import { IoIosAdd } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs"; 

const Sidebar: React.FC = () => {
  const handleAddClick = () => {
  };    

  const handleProfileClick = () => {
  };

  const hiddenPaths: string[] = ["/sign-in", "/sign-up"];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }  
  
  return (
    <SideBar>
        <AddButton onClick={handleAddClick}>
          <IoIosAdd className="AddIcon"/>
        </AddButton>

      <ProfileButton onClick={handleProfileClick}>
        <BsFillPersonFill className="ProfileIcon"/>
      </ProfileButton>
    </SideBar>
  );
};

export default Sidebar;
