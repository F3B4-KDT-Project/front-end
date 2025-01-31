import React from 'react';
import { ProfileImage } from './style';
import defaultImg from '../../../assets/icons/logo_black.svg';
import { BsImageFill } from 'react-icons/bs';
import { ProfileImageProps } from '../../../models/MyPage';

export const ProfileImg: React.FC<ProfileImageProps> = (
  profileImage,
  patchUserProfileImage
) => {
  const profileImageUploadRef = React.useRef<HTMLInputElement>(null);

  const handleProfileImageUploadButtonClick = () => {
    profileImageUploadRef.current?.click();
  };

  const handleProfileImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      try {
        const file = event.target.files[0];
        await patchUserProfileImage(file);
      } catch (error) {
        console.error('프로필 이미지 수정 실패:', error);
      }
    }
  };

  return (
    <ProfileImage>
      <img src={profileImage.toString() || defaultImg} alt="프로필 이미지" />
      <button
        aria-label="프로필 이미지 수정"
        onClick={handleProfileImageUploadButtonClick}
      >
        <input
          type="file"
          accept="image/*"
          id="profileImageUpload"
          onChange={handleProfileImageChange}
          ref={profileImageUploadRef}
          style={{ display: 'none' }}
        />
        <BsImageFill className="icon_image" />
      </button>
    </ProfileImage>
  );
};
