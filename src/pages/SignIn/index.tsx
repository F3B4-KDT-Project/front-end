import React, { useState } from 'react';
import { Input } from '../../components/common/Input';
import { AuthButton } from '../../components/auth/Button';
import {
  SignInButtonWrapper,
  SignInContainer,
  SignInForm,
  SignInLogo,
} from './style';
import logo_black from '../../assets/icons/logo_black.svg';

const SignIn = () => {
  const [user, setUser] = useState({ id: '', password: '' });
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleLogin = () => {
    // 임시 함수: 에러 상태를 true로 설정
    setError(true);

    // 임시 함수: 로그인 버튼 비활성화
    setDisabled(true);

    // 추가적인 로직
    console.log('로그인 시도:', user);
  };

  return (
    <SignInContainer>
      <SignInLogo>
        <img src={logo_black} alt="Coedu logo" />
        <div>
          실시간 코드 편집기와 채팅 기능을 결합한 코딩 교육 보조 웹 서비스
        </div>
      </SignInLogo>

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
          error={error}
          message="틀린 비밀번호이거나 없는 계정입니다."
        />
      </SignInForm>

      <SignInButtonWrapper>
        <AuthButton onClick={handleLogin} disabled={disabled} text="LOGIN" />
        <div>
          <span>아직 회원이 아니신가요?</span>
          <button>회원가입</button>
        </div>
      </SignInButtonWrapper>
    </SignInContainer>
  );
};

export default SignIn;
