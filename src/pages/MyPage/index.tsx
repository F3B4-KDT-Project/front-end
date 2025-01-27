import React, { useState } from 'react';
import defaultImg from '../../assets/icons/logo_black.svg';
import { BsImageFill, BsPencilFill } from 'react-icons/bs';
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
  ThemeSelectionForm,
  ThemeSelectionSection,
  UserInfoSection,
} from './style';

const MyPage: React.FC = () => {
  const userName = '유지희';
  const userId = 'esder1310';

  const [isEditingId, setIsEditingId] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <MyPageContainer>
      <MyPageHeader>
        <MyPageHeaderUserName>{userName}</MyPageHeaderUserName>님의 마이페이지
      </MyPageHeader>

      <MyPageContent>
        <UserInfoSection aria-labelledby="user-info">
          <h2 id="user-info" style={{ display: 'none' }}>
            사용자 정보
          </h2>

          <ProfileImage>
            <img src={defaultImg} alt="프로필 이미지" />
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
                    value={userId}
                    onChange={() => {}}
                    placeholder="수정할 아이디를 입력하세요."
                  />
                  <button onClick={() => setIsEditingId(false)}>
                    수정완료
                  </button>
                </EditInfo>
              ) : (
                <ProfileInfoDetailsContent>{userId}</ProfileInfoDetailsContent>
              )}
            </ProfileInfoDetails>

            <ProfileInfoDetails>
              <label htmlFor="name">
                | 사용자 이름
                <button
                  onClick={() => setIsEditingName(true)}
                  aria-label="사용자 이름 수정"
                >
                  <BsPencilFill className="icon_edit" />
                </button>
              </label>
              {isEditingName ? (
                <EditInfo>
                  <Input
                    type="text"
                    id="name"
                    value={userName}
                    onChange={() => {}}
                    placeholder="수정할 이름 입력하세요."
                  />
                  <button onClick={() => setIsEditingName(false)}>
                    수정완료
                  </button>
                </EditInfo>
              ) : (
                <ProfileInfoDetailsContent>
                  {userName}
                </ProfileInfoDetailsContent>
              )}
            </ProfileInfoDetails>
          </ProfileInfo>
        </UserInfoSection>

        <ThemeSelectionSection aria-labelledby="theme-selection">
          <h2 id="theme-selection">테마 선택</h2>
          <ThemeSelectionForm action="">
            <div>
              <input type="radio" />
              <label htmlFor="dark-mode">dark mode</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="light-mode">light mode</label>
            </div>
          </ThemeSelectionForm>
        </ThemeSelectionSection>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
