import React from 'react';
import { InputProps } from '../../../models/Common';
import { InputSection } from './style';

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
