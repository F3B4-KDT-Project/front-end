/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogIn } from '../../hooks/Auth/useLogIn';

export default function KakaoCallback() {
  const navigate = useNavigate();
  const loginMutation = useLogIn();
  const [isRequested, setIsRequested] = useState(false); // 중복 실행 방지

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) {
      console.error('카카오 로그인 실패: authorizationCode 없음');
      return;
    }

    console.log('카카오 로그인 코드:', code);

    if (!isRequested) {
      // 중복 요청 방지
      setIsRequested(true); // 요청 상태 업데이트
      loginMutation.mutate(
        { authorizationCode: code },
        {
          onSuccess: () => navigate('/'),
        }
      );
    }
  }, [navigate, loginMutation, isRequested]);

  return <div>카카오 로그인 중...</div>;
}
