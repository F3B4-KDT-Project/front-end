import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Line,
  Input,
  TextArea,
  Button,
  StepContainer,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { useCreateSchedule } from '../../../hooks/Schedule/useCreateSchedule';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';

// ✅ Props 타입 추가
interface AddScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddScheduleModal: React.FC<AddScheduleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [title, setTitle] = useState<string>('');
  const [startAt, setStartAt] = useState<string>('');
  const [endAt, setEndAt] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);
  const [email, setEmail] = useState<string>('');

  const createSchedule = useCreateSchedule();
  const locationParams = useLocation();
  const searchParams = new URLSearchParams(locationParams.search);
  const boardIdParam = searchParams.get('boardId');
  const boardId = boardIdParam ? Number(boardIdParam) : null;

  const location = { name: '더미 장소', latitude: 37.5665, longitude: 126.978 };
  const theme = useTheme();

  const handleNextStep = () => {
    if (step === 1 && title && startAt && endAt) setStep(2);
    else if (step === 2) setStep(3);
  };

  const handleAddParticipant = () => {
    if (email) {
      setParticipants((prev) => [...prev, email]); // ✅ 배열 유지하면서 추가
      setEmail('');
    }
  };

  const handleCreateSchedule = () => {
    if (boardId === null || isNaN(boardId)) {
      alert('게시판 ID가 유효하지 않습니다.');
      return;
    }

    const scheduleData = {
      boardId,
      title,
      startAt,
      endAt,
      locationId: '18577297', // ✅ 더미 locationId 추가
      locationName: location.name,
      latitude: location.latitude,
      longitude: location.longitude,
      members: participants.map((email) => ({ identificationCode: email })),
    };

    createSchedule.mutate(scheduleData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h1>일정 추가하기</h1>
          <button onClick={onClose}>
            <BsXLg size="1.5rem" color={theme.colors.lightGray} />
          </button>
        </ModalHeader>
        <Line />
        {step === 1 && (
          <StepContainer>
            <h2>일정 제목</h2>
            <Input
              placeholder="일정 제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h2>약속 시간</h2>
            <Input
              placeholder="시작 시간 (YYYY-MM-DD HH:mm)"
              value={startAt}
              onChange={(e) => setStartAt(e.target.value)}
            />
            <Input
              placeholder="종료 시간 (YYYY-MM-DD HH:mm)"
              value={endAt}
              onChange={(e) => setEndAt(e.target.value)}
            />

            <h2>일정 장소</h2>
            <Input
              placeholder="종료 시간 (YYYY-MM-DD HH:mm)"
              value={endAt}
              onChange={(e) => setEndAt(e.target.value)}
            />
            <Button
              onClick={handleNextStep}
              disabled={!title || !startAt || !endAt}
            >
              다음
            </Button>
          </StepContainer>
        )}

        {step === 2 && (
          <StepContainer>
            <p>장소 선택 (더미 데이터 사용 중)</p>
            <TextArea value={location.name} readOnly />
            <Button onClick={handleNextStep}>확정</Button>
          </StepContainer>
        )}

        {step === 3 && (
          <StepContainer>
            {participants.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <Input
              placeholder="참여자 이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleAddParticipant} disabled={!email}>
              추가
            </Button>
            <Button onClick={handleCreateSchedule}>일정 추가</Button>
          </StepContainer>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddScheduleModal;
