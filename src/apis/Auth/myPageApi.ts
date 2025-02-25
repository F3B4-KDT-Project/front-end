import { UserProfileResponse } from '../../models/Auth';
import { http } from '../httpClient';

// 유저 프로필 정보 조회
export const fetchUserProfile = async (): Promise<UserProfileResponse> => {
  return await http.get<UserProfileResponse>(`/api/auth/profile`);
};

// 프로필 이미지 수정
export const updateProfileImage = async (
  image: File
): Promise<UserProfileResponse> => {
  const formData = new FormData();
  formData.append('image', image);

  return await http.patch(`/api/auth/profile/profile-image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 닉네임 수정
export const updateNickName = async (
  nickName: string
): Promise<UserProfileResponse> => {
  return await http.patch(`/api/auth/profile/nickname`, null, {
    params: { nickName },
  });
};
