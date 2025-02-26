import { http } from '../../apis/httpClient';
import { CreateBoardRequest, CreateBoardResponse } from '../../models/Modal';

export const createBoardApi = async ({
  title,
}: CreateBoardRequest): Promise<CreateBoardResponse> => {
  const token = localStorage.getItem('accessToken'); // 토큰 가져오기
  if (!token) {
    throw new Error('🚨 토큰이 없습니다. 로그인 상태를 확인해주세요.');
  }

  const response = await http.post<CreateBoardResponse>(
    '/api/boards',
    { title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response; // ✅ `response.data` 대신 `response` 반환
};
