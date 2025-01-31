import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Body,
  InputFieldWrapper,
  InputField,
  ButtonWrapper,
  SubmitButton,
  Line,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { BoardModalProps } from '../../../models/Modal';
import UserInfo from '../../../components/board/UserInfo';

const ParticipantModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
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
          <h2>9oorm_KDT 참여자</h2>
          <BsXLg className="CloseButton" onClick={onClose} />
        </ModalHeader>
        <Line />
        <Body>
          {!isAdding ? (
            <>
              {participants.map((participant) => (
                <UserInfo
                  key={participant.id}
                  profileImage={participant.profileImage}
                  id={participant.id}
                  nickName={participant.nickName}
                  onRemove={() => handleRemove(participant.id)}
                />
              ))}
            </>
          ) : (
            <>
              {participants.map((participant) => (
                <UserInfo
                  key={participant.id}
                  profileImage={participant.profileImage}
                  id={participant.id}
                  nickName={participant.nickName}
                  onRemove={() => handleRemove(participant.id)}
                />
              ))}
              <InputFieldWrapper>
                <InputField
                  type="text"
                  placeholder="초대하려는 사용자의 아이디를 입력하세요."
                  value={newId}
                  onChange={(e) => setNewId(e.target.value)}
                />
                <SubmitButton onClick={handleAddParticipant}>
                  추가하기
                </SubmitButton>
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
