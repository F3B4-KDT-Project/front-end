import { useMutation } from '@tanstack/react-query';
import { CreatePostRequest, Post } from '../../models/Post';
import { createPost } from '../../apis/Posts/postApi';
import { useNavigate } from 'react-router-dom';

export const useCreatePost = () => {
  const navigate = useNavigate();
  return useMutation<Post, Error, CreatePostRequest>({
    mutationFn: createPost,
    onSuccess: (data: Post) => {
      navigate(`/${data.boardId}/${data.id}`);
    },
    onError: (error) => {
      console.error('게시글 작성 실패:', error);
    },
  });
};
