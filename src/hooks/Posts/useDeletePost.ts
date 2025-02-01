import { useMutation } from '@tanstack/react-query';
import { deletePost } from '../../apis/Posts/postApi';
import { useNavigate } from 'react-router-dom';

export const useDeletePost = (boardId: number) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: () => {
      navigate(`/:${boardId}`, { replace: true });
    },
    onError: (error: unknown) => {
      console.error('Failed to delete the post:', error);
    },
  });
};
