import React from 'react';
import kakaoLogin from '../../assets/icons/kakao_login_medium_wide.png';
import { LoginContainer, LoginSection } from './style';
import { Header } from '../../components/login/Header';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <Header />
      <LoginSection>
        <button>
          <img src={kakaoLogin} alt="kakao login" />
        </button>
        <p>카카오 로그인으로 시작해보세요!</p>
      </LoginSection>
    </LoginContainer>
  );
};

export default Login;
