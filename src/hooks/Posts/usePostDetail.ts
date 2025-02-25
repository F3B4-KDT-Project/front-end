import { useQuery } from '@tanstack/react-query';
import { fetchPostDetail } from '../../apis/Posts/postApi';
import { PostProps } from '../../models/Post';

export const usePostDetail = (id: number) => {
  return useQuery<PostProps>({
    queryKey: ['postDetail'],
    queryFn: () => fetchPostDetail(id),
    staleTime: 1000,
  });
};
