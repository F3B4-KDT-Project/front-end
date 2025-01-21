import React from 'react';
import { AuthInputProps } from '../../../../types/Common';
import { InputSection } from './style';

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
    <InputSection>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div>{message}</div>}
    </InputSection>
  );
};
