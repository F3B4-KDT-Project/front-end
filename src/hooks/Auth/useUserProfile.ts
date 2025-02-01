import { useQuery } from '@tanstack/react-query';
import { UserProfileResponse } from '../../models/Auth';
import { fetchUserProfile } from '../../apis/Auth/myPageApi';

export const useUserProfile = () => {
  return useQuery<UserProfileResponse>({
    queryKey: ['userInfo'],
    queryFn: fetchUserProfile,
    staleTime: 1000,
  });
};
