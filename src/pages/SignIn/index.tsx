import React, { useState } from 'react';
import { Input } from '../../components/common/Input';
import { AuthButton } from '../../components/auth/Button';
import {
  SignInBody,
  SignInContainer,
  SignInFooter,
  SignInForm,
  SignInHeader,
} from './style';
import logo_black from '../../assets/icons/logo_black.svg';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '../../hooks/Auth/useSignIn';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const { mutate } = useSignIn();
  const [user, setUser] = useState({ id: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const isFormValid = user.id.trim() !== '' && user.password.trim() !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
    setErrorMessage(''); // 입력값이 변경될 때 에러 메시지 초기화
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      mutate(
        { loginId: user.id, password: user.password },
        {
          onSuccess: () => {
            navigate('/', { replace: true });
          },
          onError: () => {
            setErrorMessage('틀린 비밀번호이거나 없는 계정입니다.');
          },
        }
      );
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <SignInContainer>
      <SignInHeader>
        <img src={logo_black} alt="Coedu logo" />
        <p>실시간 코드 편집기와 채팅 기능을 결합한 코딩 교육 보조 웹 서비스</p>
      </SignInHeader>

      <SignInBody>
        <SignInForm>
          <Input
            type="text"
            id="id"
            value={user.id}
            onChange={handleChange}
            placeholder="아이디를 입력하세요."
          />
          <Input
            type="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요."
            error={!!errorMessage}
            message={errorMessage}
          />
        </SignInForm>

        <AuthButton
          onClick={handleLogin}
          disabled={!isFormValid}
          text="LOGIN"
        />
      </SignInBody>

      <SignInFooter>
        <p>아직 회원이 아니신가요?</p>
        <button onClick={() => navigate('/sign-up')}>회원가입</button>
      </SignInFooter>
    </SignInContainer>
  );
};

export default SignIn;
