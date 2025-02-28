import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 7.875rem;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.modalBg};
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  box-shadow:
    0px 0px 4px 0px ${({ theme }) => theme.colors.lightGray} inset,
    0px 0px 4px 0px ${({ theme }) => theme.colors.black};

  h2 {
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.fonts.title3};
    margin-top: 1.69rem;
    margin-bottom: 1.06rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.37rem;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.fonts.title6};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.125rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.37rem;
`;

/* ✅ 카카오맵이 들어갈 컨테이너 */
export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

/* ✅ 입력 필드와 버튼을 감싸는 컨테이너 */
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 1rem;

  input {
    width: 34.875rem;
    flex-shrink: 0;
    padding: 0.81rem 1.3rem;
    border-radius: 0.4375rem;
    border: 3px solid ${({ theme }) => theme.colors.lightGray};
    text-align: center;
    font-size: 1rem;
    background: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.gray};
    color: white;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.black};
    }
  }
`;

/* ✅ 버튼을 감싸는 컨테이너 */
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const Button = styled.button`
  width: 48%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    background: #444;
    cursor: not-allowed;
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
