import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createScheduleApi } from '../../apis/Schedule/createScheduleApi';
import { useLocation } from 'react-router-dom';

interface ScheduleData {
  title: string;
  startAt: string;
  endAt: string;
  locationName: string;
  locationId: string;
  latitude: number;
  longitude: number;
  members: { identificationCode: string }[];
}

export const useCreateSchedule = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const boardIdParam = searchParams.get('boardId');
  const boardId = boardIdParam ? Number(boardIdParam) : null;

  return useMutation({
    mutationFn: async (scheduleData: ScheduleData) => {
      if (boardId === null || isNaN(boardId)) {
        throw new Error('일정을 생성할 boardId가 없습니다.');
      }
      return await createScheduleApi(boardId, scheduleData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules', boardId] });
    },
  });
};
