import React, { useState } from 'react';
import { Input } from '../../components/common/Input';
import { AuthButton } from '../../components/auth/Button';
import logo_black from '../../assets/icons/logo_black.svg';

const SignIn = () => {
  const [user, setUser] = useState({ id: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <div>
      <section>
        <img src={logo_black} alt="Coedu logo" />
        <div>
          실시간 코드 편집기와 채팅 기능을 결합한 코딩 교육 보조 웹 서비스
        </div>
      </section>

      <form>
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
          error={false}
          message="틀린 비밀번호이거나 없는 계정입니다."
        />
      </form>

      <section>
        <AuthButton onClick={() => {}} disabled={false} text="LOGIN" />
        <div>
          <span>아직 회원이 아니신가요?</span>
          <button>회원가입</button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
