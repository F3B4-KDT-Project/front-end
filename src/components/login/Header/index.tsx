import React from 'react';
import logo from '../../../assets/icons/logo_black.svg';
import { HeaderText, LoginHeader } from './style';

export const Header: React.FC = () => {
  return (
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
  );
};
