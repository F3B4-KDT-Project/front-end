import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../apis/Posts/postApi';
import { Post } from '../../models/Post';

export const usePosts = (boardId: number) => {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(boardId),
    staleTime: 1000,
  });
};
