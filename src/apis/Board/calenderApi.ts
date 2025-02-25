import { ScheduleProps } from '../../models/Calendar';
import { http } from '../httpClient';

export const FetchScheduleListApi = async (boardId: number, date: string) => {
  const token = localStorage.getItem('accessToken');
  const formattedDate = new Date(date).toISOString().split('T')[0];

  if (!token) {
    throw new Error('토큰이 없습니다. 로그인 상태를 확인해주세요.');
  }
  return await http.get<ScheduleProps[]>(
    `/api/boards/${boardId}/schedules?date=${formattedDate}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
};
