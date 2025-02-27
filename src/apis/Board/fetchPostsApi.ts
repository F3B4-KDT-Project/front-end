import { http } from '../../apis/httpClient';
import { PostResponse } from '../../models/Post';

export const fetchPostsApi = async (
  boardId: number
): Promise<PostResponse[]> => {
  try {
    const response = await http.get<PostResponse[]>(
      `/api/posts/board/${boardId}`,
      {
        headers: {
          Authorization: `Bearer {token}`, // 🔥 추가
          'Content-Type': 'application/json', // 🔥 추가
        },
      }
    );
    return response;
  } catch (error) {
    console.error('게시글 조회 API 오류:', error);
    throw error;
  }
};
