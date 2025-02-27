import { updateNickName, updateProfileImage } from '../../apis/Auth/myPageApi';

export const useUpdateProfile = () => ({
  patchUserProfileImage: async (image: File) => {
    return updateProfileImage(image);
  },

  patchUserNickName: async (nickName: string) => {
    return updateNickName(nickName);
  },
});
