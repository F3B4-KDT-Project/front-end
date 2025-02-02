// apis/Board/fetchBoardsApi.ts
import { http } from '../../apis/httpClient';
import { BoardResponse } from '../../models/Board';

export const fetchBoardsApi = async (): Promise<BoardResponse[]> => {
  try {
    const response = await http.get<BoardResponse[]>('/api/boards/my');
    return response;
  } catch (error) {
    console.error('API 호출 중 에러 발생:', error);
    throw error; // 에러를 상위로 전달
  }
};
