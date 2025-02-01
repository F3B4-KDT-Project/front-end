import { SignInRequest, SignInResponse } from '../../models/Auth';
import { http } from '../httpClient';

export const loginApi = async (
  loginData: SignInRequest
): Promise<SignInResponse> => {
  const data = await http.post<SignInResponse>('/api/auth/login', loginData);
  return data;
};
