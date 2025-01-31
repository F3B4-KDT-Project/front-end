import { useQuery } from '@tanstack/react-query';
import { UserProfileResponse } from '../../models/Auth';
import { http } from '../../apis/httpClient';

export const useUserProfile = () => {
  return useQuery<UserProfileResponse>({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const data = await http.get<UserProfileResponse>(`/api/auth/profile`);
      return data;
    },
    staleTime: 1000,
  });
};
