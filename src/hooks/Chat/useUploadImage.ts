import { useMutation } from '@tanstack/react-query';
import { UploadImageApi } from '../../apis/Chat/chatApi';
import { UploadImageRequest } from '../../models/ChatData.type';

export const useUploadImage = (roomId: number, token: string) => {
  return useMutation<void, Error, UploadImageRequest>({
    mutationFn: (data) => UploadImageApi(roomId, token, data),
    onSuccess: () => {
      console.log('이미지 업로드 성공:');
    },
    onError: () => {
      console.error('이미지 업로드 실패:');
    },
  });
};
