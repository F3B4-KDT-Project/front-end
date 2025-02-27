import { useQuery } from '@tanstack/react-query';
import { fetchPostsApi } from '../../apis/Board/fetchPostsApi';
import { PostResponse } from '../../models/Post';

export const useFetchPosts = (boardId: number) => {
  return useQuery<PostResponse[], Error>({
    queryKey: ['posts', boardId], // 게시판별로 캐싱 키 설정
    queryFn: () => fetchPostsApi(boardId),
    enabled: !!boardId, // boardId가 있을 때만 요청
  });
};
