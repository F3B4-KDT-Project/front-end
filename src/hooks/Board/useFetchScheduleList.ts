import { useQuery } from '@tanstack/react-query';
import { ScheduleProps } from '../../models/Calendar';
import { FetchScheduleListApi } from '../../apis/Board/calenderApi';

export const useFetchScheduleList = (boardId: number, date: string) => {
  return useQuery<ScheduleProps[]>({
    queryKey: ['scheduleList', boardId, date],
    queryFn: () => FetchScheduleListApi(boardId, date),
  });
};
