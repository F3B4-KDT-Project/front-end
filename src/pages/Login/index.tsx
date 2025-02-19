import React from 'react';
import logo from '../../assets/icons/logo_black.svg';
import kakaoLogin from '../../assets/icons/kakao_login_medium_wide.png';
import { LoginContainer } from './style';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <header>
        <img src={logo} alt="coedu logo" />
        <div>
          <p>
            실시간으로 소통하는 <br />
            참여형 교육 WEB IDE 플랫폼
          </p>
          <h1>Coedu, 코에듀</h1>
        </div>
      </header>
      <section>
        <button>
          <img src={kakaoLogin} alt="kakao login" />
        </button>
      </section>
    </LoginContainer>
  );
};

export default Login;
