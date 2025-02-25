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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleCopy = async () => {
    if (!detail) return;

    try {
      await navigator.clipboard.writeText(detail);
      toast.success('복사 완료!', {
        position: 'top-center', // 팝업 위치
        autoClose: 1500, // 1.5초 후 자동 닫힘
        hideProgressBar: true, // 진행 바 숨기기
        closeOnClick: false, // 클릭 시 닫기
        pauseOnHover: false, // 호버 시 멈춤
        draggable: false, // 드래그 가능 여부
        theme: 'dark', // 다크 모드 스타일
      });
    } catch (error) {
      console.error('복사 실패:', error);
    }
  };

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
          )}
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
          {label === '사용자 초대 코드' && (
            <button onClick={handleCopy} aria-label="초대 코드 복사">
              <BsFiles size="1.5rem" color={theme.colors.gray} />
            </button>
          )}
        </ProfileInfoDetailsContent>
      )}
    </ProfileInfoDetails>
  );
};
