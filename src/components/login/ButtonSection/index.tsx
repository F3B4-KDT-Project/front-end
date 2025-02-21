import React from 'react';
import kakaoLogin from '../../../assets/icons/kakao_login_medium_wide.png';
import { LoginSection } from './style';

export const ButtonSection = () => {
  return (
    <LoginSection>
      <button>
        <img src={kakaoLogin} alt="kakao login" />
      </button>
      <p>카카오 로그인으로 시작해보세요!</p>
    </LoginSection>
  );
};
