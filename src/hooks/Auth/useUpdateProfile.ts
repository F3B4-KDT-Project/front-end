import { http } from '../../apis/httpClient';

export const useUpdateProfile = () => ({
  patchUserProfileImage: async (image: File) => {
    const formData = new FormData();
    formData.append('image', image);

    const data = await http.patch(`/api/auth/profile/profile-image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 헤더에 multipart/form-data 설정
      },
    });

    return data;
  },

  patchUserNickName: async (nickName: string) => {
    const data = await http.patch(`/api/auth/profile/nickname`, null, {
      params: { nickName },
    });
    return data;
  },

  patchUserLoginId: async (loginId: string) => {
    const data = await http.patch('/api/auth/profile/login-id', null, {
      params: { loginId },
    });
    return data;
  },
});
