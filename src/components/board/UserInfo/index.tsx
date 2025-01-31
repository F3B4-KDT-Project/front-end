import React from 'react';
import {
  UserContainer,
  ProfileImage,
  Info,
  Id,
  Nickname,
  RemoveButton,
} from './style';
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
      <RemoveButton onClick={onRemove}>
        <BsXLg />
      </RemoveButton>
    </UserContainer>
  );
};

export default UserInfo;
