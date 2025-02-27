import React, { useState } from 'react';
import {
  MyPageContainer,
  MyPageContent,
  MyPageHeader,
  MyPageHeaderUserName,
  UserInfoWrapper,
  UserSettingWrapper,
} from './style';
import { useUserProfile } from '../../hooks/Auth/useUserProfile';
import { useUpdateProfile } from '../../hooks/Auth/useUpdateProfile';
import { ProfileImg } from '../../components/myPage/ProfileImage';
import { ProfileDetails } from '../../components/myPage/ProfileDetails';
import { ThemeSelection } from '../../components/myPage/ThemeSelection';
import { ThemeSelectionProps } from '../../models/MyPage';
import { Notification } from '../../components/myPage/Notification';
import InvitationDecisionModal from '../../components/modals/InvitationDecisionModal';
import { useQueryClient } from '@tanstack/react-query';

const MyPage: React.FC<ThemeSelectionProps> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useUserProfile();
  const { patchUserNickName, patchUserProfileImage } = useUpdateProfile();

  const [isEditingNickName, setIsEditingNickName] = useState(false);
  const [nickName, setNickName] = useState(data?.nickName ?? '');

  const [selectedNotification, setSelectedNotification] = useState<{
    notificationId: number;
    boardId: number;
    boardTitle: string;
  } | null>(null);

  const handleNickNameChange = async () => {
    try {
      await patchUserNickName(nickName);
      setIsEditingNickName(false);
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
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
        <UserSettingWrapper>
          <ProfileImg
            profileImage={data?.profileImage ?? ''}
            patchUserProfileImage={patchUserProfileImage}
          />
          <ThemeSelection
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </UserSettingWrapper>

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

          <Notification onItemClick={setSelectedNotification} />
        </UserInfoWrapper>
      </MyPageContent>

      {selectedNotification && (
        <InvitationDecisionModal
          isOpen={!!selectedNotification}
          onClose={() => setSelectedNotification(null)}
          notificationId={selectedNotification.notificationId}
          boardId={selectedNotification.boardId}
          boardTitle={selectedNotification.boardTitle}
        />
      )}
    </MyPageContainer>
  );
};

export default MyPage;
