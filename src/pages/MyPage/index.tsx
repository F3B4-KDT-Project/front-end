import React, { useState } from 'react';
import defaultImg from '../../assets/icons/logo_black.svg';
import {
  BsImageFill,
  BsPencilFill,
  BsFillCheckCircleFill,
} from 'react-icons/bs';
import { Input } from '../../components/common/Input';
import {
  EditInfo,
  MyPageContainer,
  MyPageContent,
  MyPageHeader,
  MyPageHeaderUserName,
  ProfileImage,
  ProfileInfo,
  ProfileInfoDetails,
  ProfileInfoDetailsContent,
  RadioOption,
  ThemeSelectionForm,
  ThemeSelectionSection,
  UncheckedCircle,
  UserInfoSection,
} from './style';
import { useUserProfile } from '../../hooks/Auth/useUserProfile';
import { useUpdateProfile } from '../../hooks/Auth/useUpdateProfile';

const MyPage: React.FC = () => {
  const { data, isLoading, error, refetch } = useUserProfile();
  const { patchUserNickName } = useUpdateProfile();

  const [isEditingId, setIsEditingId] = useState(false);

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  console.log(data);

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

          <ProfileImage>
            <img src={data?.profileImage || defaultImg} alt="프로필 이미지" />
            <button aria-label="프로필 이미지 수정">
              <BsImageFill className="icon_image" />
            </button>
          </ProfileImage>

          <ProfileInfo>
            <ProfileInfoDetails>
              <label htmlFor="id">
                | 사용자 아이디
                <button
                  onClick={() => setIsEditingId(true)}
                  aria-label="사용자 아이디 수정"
                >
                  <BsPencilFill className="icon_edit" />
                </button>
              </label>
              {isEditingId ? (
                <EditInfo>
                  <Input
                    type="id"
                    id="id"
                    value={data?.loginId ?? ''}
                    onChange={() => {}}
                    placeholder="수정할 아이디를 입력하세요."
                  />
                  <button onClick={() => setIsEditingId(false)}>
                    수정완료
                  </button>
                </EditInfo>
              ) : (
                <ProfileInfoDetailsContent>
                  {data?.loginId}
                </ProfileInfoDetailsContent>
              )}
            </ProfileInfoDetails>

            <ProfileInfoDetails>
              <label htmlFor="name">
                | 사용자 닉네임
                <button
                  onClick={() => setIsEditingNickName(true)}
                  aria-label="사용자 닉네임 수정"
                >
                  <BsPencilFill className="icon_edit" />
                </button>
              </label>
              {isEditingNickName ? (
                <EditInfo>
                  <Input
                    type="text"
                    id="name"
                    value={nickName}
                    onChange={(e) => {
                      setNickName(e.target.value);
                    }}
                    placeholder="수정할 닉네임을 입력하세요."
                  />
                  <button onClick={handleNickNameChange}>수정완료</button>
                </EditInfo>
              ) : (
                <ProfileInfoDetailsContent>
                  {data?.nickName}
                </ProfileInfoDetailsContent>
              )}
            </ProfileInfoDetails>
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
