import React from 'react';
import logo_black from '../../assets/icons/logo_black.svg';
import { Input } from '../../components/common/Input';
import { AuthButton } from '../../components/auth/Button';

const SignUp = () => {
  return (
    <div>
      <section>
        <img src={logo_black} alt="logo" />
        <div>
          <p>
            실시간 코드 편집기와 채팅 기능을 결합한 코딩 교육 보조 웹 서비스
          </p>
          <h1>회원가입</h1>
        </div>
      </section>

      <section>
        <Input
          type="text"
          id="id"
          value=""
          onChange={() => {}}
          placeholder="아이디를 입력하세요"
        />
        <Input
          type="password"
          id="password"
          value=""
          onChange={() => {}}
          placeholder="비밀번호를 입력하세요"
        />
        <Input
          type="password"
          id="passwordConfirm"
          value=""
          onChange={() => {}}
          placeholder="비밀번호를 다시 입력하세요"
        />
        <Input
          type="text"
          id="name"
          value=""
          onChange={() => {}}
          placeholder="이름을 입력하세요"
        />

        <AuthButton onClick={() => {}} disabled text="SIGN IN" />
      </section>
    </div>
  );
};

export default SignUp;
