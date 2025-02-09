import { useQuery } from '@tanstack/react-query';
import { ChatHistoryApi } from '../../apis/Post/chatApi';

export const useChatHistory = (roomId: number, token: string) => {
  return useQuery({
    queryKey: ['chatHistory', roomId],
    queryFn: () => ChatHistoryApi(roomId, token),
    staleTime: 1000,
  });
};
