import { useMutation, useQueryClient } from '@tanstack/react-query';
import { rejectInvitation } from '../../apis/Notifications/inviteDecisionApi';

export const useRejectInvitation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    string, // 응답 타입
    Error, // 에러 타입
    { notificationId: number; boardId: number } // 요청 파라미터 타입
  >({
    mutationFn: ({ notificationId, boardId }) =>
      rejectInvitation(notificationId, boardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });
};
