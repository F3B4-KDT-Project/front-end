import React from 'react';
import { InputProps } from '../../../models/Common';
import { InputContainer } from './style';

export const Input: React.FC<InputProps> = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  error,
  message,
}) => {
  return (
    <InputContainer>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error !== undefined && <div>{message}</div>}
    </InputContainer>
  );
};
