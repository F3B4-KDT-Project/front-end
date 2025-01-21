import React from 'react';
import { AuthInputProps } from '../../../../types/Auth';

export const AuthInput: React.FC<AuthInputProps> = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  error,
  message,
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div>{message}</div>}
    </div>
  );
};
