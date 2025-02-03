import { useQuery } from '@tanstack/react-query';
import { fetchPostsApi } from '../../apis/Board/fetchPostsApi';
import { PostResponse } from '../../models/Post';

export const useFetchPosts = (boardId: number | null) => {
  return useQuery<PostResponse[], Error>({
    queryKey: ['posts', boardId],
    queryFn: () => fetchPostsApi(boardId!),
    enabled: !!boardId,
    staleTime: 5 * 60 * 1000,
  });
};
