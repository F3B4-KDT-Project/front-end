import { http } from '../../apis/httpClient';
import { PostResponse } from '../../models/Post';

export const fetchPostsApi = async (
  boardId: number
): Promise<PostResponse[]> => {
  try {
    console.log(`게시글 데이터 요청 시작 (boardId: ${boardId})`);
    const response = await http.get<PostResponse[]>(`/api/posts/${boardId}`);
    console.log(`게시글 데이터 요청 성공:`, response);
    return response;
  } catch (error) {
    console.error('게시글 데이터 요청 실패:', error);
    throw error; // 에러를 다시 던져서 `useQuery`에서 처리
  }
};
