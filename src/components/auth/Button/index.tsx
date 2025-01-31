import React from 'react';
import { AuthButtonProps } from '../../../models/Auth';
import { Button } from './style';

export const AuthButton: React.FC<AuthButtonProps> = ({
  onClick,
  disabled,
  text,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};
