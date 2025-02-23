import { useMutation } from '@tanstack/react-query';
import { SignInRequest, SignInResponse } from '../../models/Auth';
import { loginApi } from '../../apis/Auth/authApi';

export const useLogIn = () => {
  return useMutation<SignInResponse, Error, SignInRequest>({
    mutationFn: loginApi,
    onSuccess: (data: SignInResponse) => {
      const accessToken = data.tokenResponse.accessToken;
      localStorage.setItem('accessToken', accessToken);
      console.log('로그인 성공:', data);
    },
    onError: (error) => {
      console.error('로그인 실패:', error);
    },
  });
};
