import { useMutation } from '@tanstack/react-query';
import { InviteRequest, InviteResponse } from '../../models/Modal';
import { inviteApi } from '../../apis/Board/inviteApi';

export const useBoardInvite = () => {
  return useMutation<InviteResponse, Error, InviteRequest>({
    mutationFn: inviteApi,
    onSuccess: (data) => {
      console.log('초대 성공:', data.message);
    },
    onError: (error) => {
      console.error('초대 실패:', error);
    },
  });
};
