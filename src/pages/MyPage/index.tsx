import React, { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {
  MyPageContainer,
  MyPageContent,
  MyPageHeader,
  MyPageHeaderUserName,
  ProfileInfo,
  RadioOption,
  ThemeSelectionForm,
  ThemeSelectionSection,
  UncheckedCircle,
  UserInfoSection,
} from './style';
import { useUserProfile } from '../../hooks/Auth/useUserProfile';
import { useUpdateProfile } from '../../hooks/Auth/useUpdateProfile';
import { ProfileImg } from '../../components/myPage/ProfileImage';
import { ProfileDetails } from '../../components/myPage/ProfileDetails';

const MyPage: React.FC = () => {
  const { data, isLoading, error, refetch } = useUserProfile();
  const { patchUserNickName, patchUserLoginId, patchUserProfileImage } =
    useUpdateProfile();

  const [isEditingId, setIsEditingId] = useState(false);
  const [id, setId] = useState(data?.loginId ?? '');

  const [isEditingNickName, setIsEditingNickName] = useState(false);
  const [nickName, setNickName] = useState(data?.nickName ?? '');

  const [selectedTheme, setSelectedTheme] = useState('dark');

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  const handleNickNameChange = async () => {
    try {
      await patchUserNickName(nickName);
      setIsEditingNickName(false);
      refetch();
    } catch (error) {
      console.error('닉네임 수정 실패', error);
    }
  };

  const handleIdChange = async () => {
    try {
      await patchUserLoginId(id);
      setIsEditingId(false);

      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('loginId');

      alert('아이디가 변경되었습니다. 다시 로그인해주세요.');
      location.href = '/sign-in';
    } catch (error) {
      console.error('아이디 수정 실패', error);
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
        <UserInfoSection aria-labelledby="user-info">
          <h2 id="user-info" style={{ display: 'none' }}>
            사용자 정보
          </h2>

          <ProfileImg
            profileImage={data?.profileImage ?? ''}
            patchUserProfileImage={patchUserProfileImage}
          />

          <ProfileInfo>
            <ProfileDetails
              label="사용자 아이디"
              isEditing={isEditingId}
              setIsEditing={setIsEditingId}
              value={id}
              setValue={setId}
              placeholder="수정할 아이디를 입력하세요."
              handleChange={handleIdChange}
              detail={data?.loginId ?? ''}
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
          </ProfileInfo>
        </UserInfoSection>

        <ThemeSelectionSection aria-labelledby="theme-selection">
          <h2 id="theme-selection">테마 선택</h2>
          <ThemeSelectionForm action="">
            <RadioOption
              isChecked={selectedTheme === 'dark'}
              onClick={() => handleThemeChange('dark')}
            >
              {selectedTheme === 'dark' ? (
                <BsFillCheckCircleFill size="1.5rem" />
              ) : (
                <UncheckedCircle />
              )}
              <label>Dark Mode</label>
            </RadioOption>
            <RadioOption
              isChecked={selectedTheme === 'light'}
              onClick={() => handleThemeChange('light')}
            >
              {selectedTheme === 'light' ? (
                <BsFillCheckCircleFill size="1.5rem" />
              ) : (
                <UncheckedCircle />
              )}
              <label>Light Mode</label>
            </RadioOption>
          </ThemeSelectionForm>
        </ThemeSelectionSection>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
