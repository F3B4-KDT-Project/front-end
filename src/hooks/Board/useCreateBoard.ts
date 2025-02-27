import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBoardApi } from '../../apis/Board/createBoardApi';
import { CreateBoardRequest, CreateBoardResponse } from '../../models/Modal';

export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateBoardResponse, Error, CreateBoardRequest>({
    mutationFn: createBoardApi, // ✅ mutationFn으로 명시적으로 전달
    onSuccess: (newBoard) => {
      console.log('✅ 생성된 게시판 정보:', newBoard);

      queryClient.invalidateQueries({ queryKey: ['boards'] });

      return newBoard;
    },
    onError: (error) => {
      console.error('🚨 게시판 생성 실패:', error);
      alert('게시판 생성에 실패했습니다.');
    },
  });
};
