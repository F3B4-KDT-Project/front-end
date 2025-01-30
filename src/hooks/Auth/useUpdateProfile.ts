import { http } from '../../apis/httpClient';

export const useUpdateProfile = () => ({
  patchUserNickName: async (nickName: string) => {
    const data = await http.patch(`/api/auth/profile/nickname`, null, {
      params: { nickName },
    });
    return data;
  },
});
