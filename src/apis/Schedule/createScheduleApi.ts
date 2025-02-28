import { http } from '../../apis/httpClient';
import { AxiosResponse } from 'axios';
import { ScheduleData, CreateScheduleResponse } from '../../models/Schedule';

export const createScheduleApi = async (
  boardId: number,
  scheduleData: ScheduleData
): Promise<CreateScheduleResponse> => {
  if (!boardId || isNaN(boardId)) {
    throw new Error('유효하지 않은 boardId입니다.');
  }

  try {
    const response: AxiosResponse<CreateScheduleResponse> = await http.post(
      `/api/boards/${boardId}/schedules`,
      scheduleData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // 토큰 추가
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data; // ✅ 반환 타입이 명확해짐
  } catch (error) {
    console.error('일정 생성 API 오류:', error);
    throw error;
  }
};
