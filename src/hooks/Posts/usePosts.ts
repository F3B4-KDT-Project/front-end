import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../apis/Posts/postApi';
import { PostProps } from '../../models/Post';

export const usePosts = (boardId: number) => {
  return useQuery<PostProps[]>({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(boardId),
    staleTime: 1000,
  });
};
