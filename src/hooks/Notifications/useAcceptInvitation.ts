import { useMutation, useQueryClient } from '@tanstack/react-query';
import { acceptInvitation } from '../../apis/Notifications/inviteDecisionApi';

export const useAcceptInvitation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    string, // 응답 타입
    Error, // 에러 타입
    { notificationId: number; boardId: number } // 요청 파라미터 타입
  >({
    mutationFn: ({ notificationId, boardId }) =>
      acceptInvitation(notificationId, boardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });
};
