import { useMutation } from '@tanstack/react-query';
import { updatePost } from '../../apis/Posts/postApi';

// 게시글 수정 React Query 훅
export const useUpdatePost = () => {
  return useMutation<
    string,
    Error,
    {
      id: number;
      postData: { boardId: number; name: string; language: string };
    }
  >({
    mutationFn: ({ id, postData }) => updatePost(id, postData),
    onSuccess: (data) => {
      console.log('게시글 수정 성공:', data);
      // 필요 시, 다른 작업 추가 (예: 캐시 무효화)
    },
    onError: (error) => {
      console.error('게시글 수정 실패:', error);
    },
  });
};
