import React from 'react';
import logo from '../../assets/icons/logo_black.svg';
import kakaoLogin from '../../assets/icons/kakao_login_medium_wide.png';
import { HeaderText, LoginContainer, LoginHeader, LoginSection } from './style';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <LoginHeader>
        <img src={logo} alt="coedu logo" />
        <HeaderText>
          <p>
            실시간으로 소통하는 <br />
            참여형 교육 WEB IDE 플랫폼
          </p>
          <h1>Coedu, 코에듀</h1>
        </HeaderText>
      </LoginHeader>
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
