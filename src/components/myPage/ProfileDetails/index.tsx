import React from 'react';
import {
  EditInfo,
  ProfileInfoDetails,
  ProfileInfoDetailsContent,
} from './style';
import { BsFiles, BsPencilFill } from 'react-icons/bs';
import { Input } from '../Input';
import { ProfileDetailsProps } from '../../../models/MyPage';
import { useTheme } from '@emotion/react';

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  label,
  isEditing,
  setIsEditing,
  value,
  setValue,
  placeholder,
  handleChange,
  detail,
}) => {
  const theme = useTheme();
  return (
    <ProfileInfoDetails>
      <label htmlFor="id">
        | {label}
        <button
          onClick={() => setIsEditing && setIsEditing(true)}
          aria-label={`${label} 수정`}
        >
          {setValue ? (
            <BsPencilFill size="1.5rem" color={theme.colors.lightGray} />
          ) : (
            <></>
          )}{' '}
        </button>
      </label>
      {isEditing && setValue && placeholder ? (
        <EditInfo>
          <Input
            type="id"
            id="id"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder={placeholder}
          />
          <button onClick={handleChange}>수정완료</button>
        </EditInfo>
      ) : (
        <ProfileInfoDetailsContent>
          {detail}
          {label === '사용자 초대 코드' ? (
            <BsFiles size="1.5rem" color={theme.colors.gray} />
          ) : (
            <></>
          )}
        </ProfileInfoDetailsContent>
      )}
    </ProfileInfoDetails>
  );
};
