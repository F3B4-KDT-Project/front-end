import React, { useState } from 'react';
import {
  MyPageContainer,
  MyPageContent,
  MyPageHeader,
  MyPageHeaderUserName,
  UserInfoWrapper,
} from './style';
import { useUserProfile } from '../../hooks/Auth/useUserProfile';
import { useUpdateProfile } from '../../hooks/Auth/useUpdateProfile';
import { ProfileImg } from '../../components/myPage/ProfileImage';
import { ProfileDetails } from '../../components/myPage/ProfileDetails';
import { ThemeSelection } from '../../components/myPage/ThemeSelection';
import { ThemeSelectionProps } from '../../models/MyPage';
import { Notification } from '../../components/myPage/Notification';

const MyPage: React.FC<ThemeSelectionProps> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  const { data, isLoading, error, refetch } = useUserProfile();
  const { patchUserNickName, patchUserProfileImage } = useUpdateProfile();

  const [isEditingNickName, setIsEditingNickName] = useState(false);
  const [nickName, setNickName] = useState(data?.nickName ?? '');

  const handleNickNameChange = async () => {
    try {
      await patchUserNickName(nickName);
      setIsEditingNickName(false);
      refetch();
    } catch (error) {
      console.error('닉네임 수정 실패', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <MyPageContainer>
      <MyPageHeader>
        <MyPageHeaderUserName>{data?.nickName}</MyPageHeaderUserName>님의
        마이페이지
      </MyPageHeader>

      <MyPageContent>
        <UserInfoWrapper aria-labelledby="user-info">
          <ProfileImg
            profileImage={data?.profileImage ?? ''}
            patchUserProfileImage={patchUserProfileImage}
          />
          <ThemeSelection
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </UserInfoWrapper>

        <UserInfoWrapper aria-labelledby="user-info">
          <ProfileDetails
            label="사용자 초대 코드"
            value={data?.kakaoId ?? ''}
            detail={data?.kakaoId ?? ''}
          />

          <ProfileDetails
            label="사용자 닉네임"
            isEditing={isEditingNickName}
            setIsEditing={setIsEditingNickName}
            value={nickName}
            setValue={setNickName}
            placeholder="수정할 닉네임을 입력하세요."
            handleChange={handleNickNameChange}
            detail={data?.nickName ?? ''}
          />

          <Notification />
        </UserInfoWrapper>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
