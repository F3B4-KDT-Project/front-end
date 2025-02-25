import { ScheduleProps } from '../../models/Calendar';
import { http } from '../httpClient';

export const FetchScheduleListApi = async (boardId: number, date: string) => {
  const token = localStorage.getItem('accessToken');
  const dateObj = new Date(date);
  const formattedDate = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
  console.log(formattedDate);

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
