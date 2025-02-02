import { InviteRequest, InviteResponse } from '../../models/Modal';
import { http } from '../../apis/httpClient';

export const inviteApi = async ({
  boardId,
  loginId,
}: InviteRequest): Promise<InviteResponse> => {
  const token = localStorage.getItem('accessToken'); // 토큰 가져오기
  if (!token) {
    throw new Error('토큰이 없습니다. 로그인 상태를 확인해주세요.');
  }

  const response = await http.post<InviteResponse>(
    `/api/boards/${boardId}/invite`,
    { loginId },
    {
      headers: {
        Authorization: `Bearer ${token}`, // 헤더에 토큰 추가
        'Content-Type': 'application/json', // 필요에 따라 추가
      },
    }
  );
  return response;
};
