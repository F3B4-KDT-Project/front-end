import { UserProfileResponse } from '../../models/Auth';
import { http } from '../httpClient';

// 유저 프로필 정보 가져오기 API 호출 함수
export const fetchUserProfile = async (): Promise<UserProfileResponse> => {
  return await http.get<UserProfileResponse>(`/api/auth/profile`);
};
