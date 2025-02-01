import React, { useState } from 'react';
import logo_black from '../../assets/icons/logo_black.svg';
import { Input } from '../../components/common/Input';
import { AuthButton } from '../../components/auth/Button';
import {
  SignUpContainer,
  SignUpFieldset,
  SignUpForm,
  SignUpHeader,
} from './style';
import { useSignUp } from '../../hooks/Auth/useSignUp';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const { mutate } = useSignUp();
  const [user, setUser] = useState({
    loginId: '',
    nickName: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({
    password: '',
    password2: '',
  });

  const validatePassword = (password: string): string => {
    const regex = /^(?=.*[a-zA-Z]).{8,}$/; // 영문자 포함, 8자 이상
    if (!regex.test(password)) {
      return '비밀번호는 영문자를 포함하여 8자 이상이어야 합니다.';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });

    // 비밀번호 유효성 검사
    if (id === 'password') {
      const error = validatePassword(value);
      setErrors((prevErrors) => ({ ...prevErrors, password: error }));
    }

    // 비밀번호 확인 유효성 검사
    if (id === 'password2') {
      const error =
        value !== user.password ? '비밀번호가 일치하지 않습니다.' : '';
      setErrors((prevErrors) => ({ ...prevErrors, password2: error }));
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      // 최종 유효성 검사
      const passwordError = validatePassword(user.password);
      const passwordMatchError =
        user.password !== user.password2 ? '비밀번호가 일치하지 않습니다.' : '';

      if (passwordError || passwordMatchError) {
        setErrors({
          password: passwordError,
          password2: passwordMatchError,
        });
        return;
      }

      mutate(user);
      navigate('/sign-in', { replace: true });
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <SignUpContainer>
      <SignUpHeader>
        <img src={logo_black} alt="logo" />
        <div>
          <p>
            실시간 코드 편집기와 채팅 기능을 결합한 코딩 교육 보조 웹 서비스
          </p>
          <h1>회원가입</h1>
        </div>
      </SignUpHeader>

      <section>
        <SignUpForm onSubmit={handleSignUp}>
          <SignUpFieldset>
            <Input
              type="text"
              id="loginId"
              value={user.loginId}
              onChange={handleChange}
              placeholder="아이디를 입력하세요"
            />
            <Input
              type="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요"
              error={!!errors.password}
              message={errors.password}
            />
            <Input
              type="password"
              id="password2"
              value={user.password2}
              onChange={handleChange}
              placeholder="비밀번호를 다시 입력하세요"
              error={!!errors.password2}
              message={errors.password2}
            />
            <Input
              type="text"
              id="nickName"
              value={user.nickName}
              onChange={handleChange}
              placeholder="닉네임을 입력하세요"
            />
          </SignUpFieldset>

          <AuthButton
            onClick={handleSignUp}
            disabled={
              !user.loginId ||
              !user.nickName ||
              !user.password ||
              !user.password2
            }
            text="SIGN IN"
          />
        </SignUpForm>
      </section>
    </SignUpContainer>
  );
};

export default SignUp;
