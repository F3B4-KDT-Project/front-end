import React from 'react';
import { LoginContainer } from './style';
import { Header } from '../../components/login/Header';
import { ButtonSection } from '../../components/login/ButtonSection';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <Header />
      <ButtonSection />
    </LoginContainer>
  );
};

export default Login;
