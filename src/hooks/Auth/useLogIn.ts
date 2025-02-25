import { useMutation } from '@tanstack/react-query';
import { LogInRequest, LogInResponse } from '../../models/Auth';
import { loginApi } from '../../apis/Auth/authApi';

export const useLogIn = () => {
  return useMutation<LogInResponse, Error, LogInRequest>({
    mutationFn: loginApi,
    onSuccess: (data: LogInResponse) => {
      const accessToken = data.tokenResponse.accessToken;
      localStorage.setItem('accessToken', accessToken);
      console.log('로그인 성공:', data);
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
};
