import React from 'react';
import kakaoLogin from '../../../assets/icons/kakao_login_medium_wide.png';
import { LoginSection } from './style';

export const ButtonSection: React.FC = () => {
  const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirectUrl = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirectUrl}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoAuthUrl;
  };

  return (
    <LoginSection>
      <button onClick={handleKakaoLogin}>
        <img src={kakaoLogin} alt="kakao login" />
      </button>
      <p>카카오 로그인으로 시작해보세요!</p>
    </LoginSection>
  );
};
