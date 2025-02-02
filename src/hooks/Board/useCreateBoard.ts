import { useMutation } from '@tanstack/react-query';
import { createBoardApi } from '../../apis/Board/createBoardApi';
import { CreateBoardRequest, CreateBoardResponse } from '../../models/Modal';

export const useCreateBoard = () => {
  return useMutation<CreateBoardResponse, Error, CreateBoardRequest>({
    mutationFn: createBoardApi,
    onSuccess: (data) => {
      console.log('교실 생성 성공:', data);
    },
    onError: (error) => {
      console.error('교실 생성 실패:', error);
    },
  });
};
