import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Line,
  StepContainer,
  Button,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { useTheme } from '@emotion/react';

interface LocationSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: () => void;
}

const LocationSelectModal: React.FC<LocationSelectModalProps> = ({
  isOpen,
  onClose,
  onSelectLocation,
}) => {
  const theme = useTheme();

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h1>일정 장소</h1>
          <button onClick={onClose}>
            <BsXLg size="1.5rem" color={theme.colors.lightGray} />
          </button>
        </ModalHeader>
        <Line />
        <StepContainer>
          <h2>일정 장소</h2>
          <div style={{ width: '100%', height: '300px', background: '#ddd' }}>
            {/* ✅ 여기에 카카오맵 API를 연동하면 됨 */}
            <p style={{ textAlign: 'center', paddingTop: '140px' }}>
              카카오맵 API 연동 (마커 선택 가능)
            </p>
          </div>

          {/* ✅ 장소 정보 표시 */}
          <input
            type="text"
            value="판교역 스타벅스"
            readOnly
            style={{
              width: '34.875rem',
              padding: '0.75rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              textAlign: 'center',
              fontSize: '1rem',
              marginTop: '1rem',
            }}
          />

          {/* ✅ 버튼 UI */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1.5rem',
            }}
          >
            <Button onClick={onClose} style={{ width: '48%' }}>
              이전
            </Button>
            <Button onClick={onSelectLocation} style={{ width: '48%' }}>
              확정
            </Button>
          </div>
        </StepContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LocationSelectModal;
