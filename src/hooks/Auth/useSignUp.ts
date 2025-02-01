import { useMutation } from '@tanstack/react-query';
import { SignUpRequest, SignUpResponse } from '../../models/Auth';
import { signUp } from '../../apis/Auth/authApi';

export const useSignUp = () => {
  return useMutation<SignUpResponse, Error, SignUpRequest>({
    mutationFn: (data) => signUp(data),
    onSuccess: (data) => {
      console.log('회원가입 성공:', data);
      alert('회원가입이 완료되었습니다!');
    },
    onError: (error) => {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
    },
  });
};
