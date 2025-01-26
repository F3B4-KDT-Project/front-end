import React from "react";
import { SideBar, AddButton, ProfileButton } from "./style";

import DarkAddIcon from '../../../assets/icons/addbtn_dark.svg';
import LightAddIcon from '../../../assets/icons/addbtn_light.svg';
import ProfileIcon from '../../../assets/icons/profilebtn.svg';

interface SidebarProps {
  theme: "dark" | "light"; 
}

const Sidebar: React.FC<SidebarProps> = ({ theme }) => {
  const handleAddClick = () => {
  };    

  const handleProfileClick = () => {
  };

  const hiddenPaths: string[] = ["/sign-in", "/sign-up"];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }  
  
    return (
    <SideBar theme={theme}>
        <AddButton onClick={handleAddClick}>
          {theme === "dark" ? (
            <img src={DarkAddIcon} alt="Add" />
          ) : (
            <img src={LightAddIcon} alt="Add" />
          )}
        </AddButton>

        <ProfileButton onClick={handleProfileClick}>
            {theme === "dark" ? (
            <img src={ProfileIcon} alt="Profile" />
            ) : (
            <img src={ProfileIcon} alt="Profile" />
            )}
        </ProfileButton>
    </SideBar>
  );
};

export default Sidebar;
