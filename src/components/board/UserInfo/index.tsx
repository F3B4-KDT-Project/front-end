import React from 'react';
import { UserContainer, ProfileImage, Info, Id, Nickname } from './style';
import { BsXLg } from 'react-icons/bs';
import { UserInfoProps } from '../../../models/PostCard';

const UserInfo: React.FC<UserInfoProps> = ({
  profileImage,
  id,
  nickName,
  onRemove,
}) => {
  return (
    <UserContainer>
      <ProfileImage src={profileImage} alt="프로필 사진" />
      <Info>
        <Id>{id}</Id>
        <Nickname>{nickName}</Nickname>
      </Info>
      <BsXLg className="CloseButton" onClick={onRemove} />
    </UserContainer>
  );
};

export default UserInfo;
