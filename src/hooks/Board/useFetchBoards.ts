// hooks/Board/useFetchBoards.ts
import { useQuery } from '@tanstack/react-query';
import { fetchBoardsApi } from '../../apis/Board/fetchBoardsApi';
import { BoardResponse } from '../../models/Board';

export const useFetchBoards = () => {
  return useQuery<BoardResponse[], Error>({
    queryKey: ['boards'], // 캐싱 키
    queryFn: fetchBoardsApi, // API 호출 함수
    staleTime: 5 * 60 * 1000, // 5분 동안 캐싱
  });
};
