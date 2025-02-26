import { http } from '../../apis/httpClient';
import { PostResponse } from '../../models/Post';

export const fetchPostsApi = async (
  boardId: number
): Promise<PostResponse[]> => {
  try {
    const response = await http.get<PostResponse[]>(`/api/posts/${boardId}`);
    return response; // ✅ `response.data` 대신 `response` 반환
  } catch (error) {
    console.error('게시글 조회 API 오류:', error);
    throw error;
  }
};
