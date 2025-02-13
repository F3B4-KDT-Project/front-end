import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Body,
  PartWrapper,
  InputFieldWrapper,
  InputField,
  ButtonWrapper,
  SubmitButton,
  AddButton,
  Line,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { InvitePersonModalProps } from '../../../models/Modal';
import UserInfo from '../../../components/board/UserInfo';
import { useTheme } from '@emotion/react';

const ParticipantModal: React.FC<InvitePersonModalProps> = ({
  isOpen,
  onClose,
}) => {
  const theme = useTheme();
  const [isAdding, setIsAdding] = useState(false); // 화면 전환 상태
  const [participants, setParticipants] = useState([
    {
      profileImage: '/profileImage1.png',
      id: 'esder1310',
      nickName: '[FE] 지희',
    },
    {
      profileImage: '/profileImage2.png',
      id: 'imi21123',
      nickName: '[FE] 채연',
    },
  ]);
  const [newId, setNewId] = useState('');

  const handleRemove = (id: string) => {
    setParticipants(participants.filter((p) => p.id !== id));
  };

  const handleAddParticipant = () => {
    if (!newId.trim()) return;

    // 더미 데이터 추가
    setParticipants([
      ...participants,
      {
        profileImage: '/avatar3.png',
        id: newId.trim(),
        nickName: '[FE] 새로운 닉네임',
      },
    ]);
    setNewId(''); // 입력 필드 초기화
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h1>9oorm_KDT 참여자</h1>
          <button onClick={onClose}>
            <BsXLg size="1.5rem" color={theme.colors.lightGray} />
          </button>
        </ModalHeader>
        <Line />
        <Body>
          {!isAdding ? (
            <>
              <PartWrapper>
                {participants.map((participant) => (
                  <UserInfo
                    key={participant.id}
                    profileImage={participant.profileImage}
                    id={participant.id}
                    nickName={participant.nickName}
                    onRemove={() => handleRemove(participant.id)}
                  />
                ))}
              </PartWrapper>
            </>
          ) : (
            <>
              <PartWrapper>
                {participants.map((participant) => (
                  <UserInfo
                    key={participant.id}
                    profileImage={participant.profileImage}
                    id={participant.id}
                    nickName={participant.nickName}
                    onRemove={() => handleRemove(participant.id)}
                  />
                ))}
              </PartWrapper>
              <InputFieldWrapper>
                <InputField
                  type="text"
                  placeholder="초대하려는 사용자의 아이디를 입력하세요."
                  value={newId}
                  onChange={(e) => setNewId(e.target.value)}
                />
                <AddButton onClick={handleAddParticipant}>추가하기</AddButton>
              </InputFieldWrapper>
            </>
          )}
        </Body>
        <ButtonWrapper>
          <SubmitButton onClick={() => setIsAdding(!isAdding)}>
            {isAdding ? '닫기' : '참여자 추가'}
          </SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ParticipantModal;
