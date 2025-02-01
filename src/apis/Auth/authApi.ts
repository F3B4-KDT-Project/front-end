import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '../../models/Auth';
import { http } from '../httpClient';

export const loginApi = async (
  loginData: SignInRequest
): Promise<SignInResponse> => {
  const data = await http.post<SignInResponse>('/api/auth/login', loginData);
  return data;
};

export const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  const response = await http.post<SignUpResponse>('/api/auth/join', data);
  return response;
};
