import { useQuery } from '@tanstack/react-query';
import { fetchPostDetail } from '../../apis/Posts/postApi';
import { Post } from '../../models/Post';

export const usePostDetail = (id: number) => {
  return useQuery<Post>({
    queryKey: ['postDetail'],
    queryFn: () => fetchPostDetail(id),
    staleTime: 1000,
  });
};
