import { LogInRequest, LogInResponse } from '../../models/Auth';
import { http } from '../httpClient';

export const loginApi = async (code: LogInRequest): Promise<LogInResponse> => {
  const data = await http.post<LogInResponse>('/api/auth/login', code);
  return data;
};
