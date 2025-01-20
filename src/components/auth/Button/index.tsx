import React from 'react';
import { AuthButtonProps } from '../../../../types/Auth';

export const AuthButton: React.FC<AuthButtonProps> = ({
  onClick,
  disabled,
  text,
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
