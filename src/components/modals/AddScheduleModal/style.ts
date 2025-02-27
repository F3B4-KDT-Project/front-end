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

export const Input = styled.input`
  width: 34.875rem;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 0.4375rem;
  border: 3px solid ${({ theme }) => theme.colors.lightGray};
  backdrop-filter: blur(2px);
  padding: 0.81rem 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.fonts.input1};

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background: #333;
  color: #fff;
  font-size: 1rem;
  resize: none;
`;

export const Button = styled.button`
  width: 34.875rem;
  flex-shrink: 0;
  padding: 0.81rem 1.3rem;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  ${({ theme }) => theme.fonts.input1};

  &:hover {
    background: #0056b3;
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

export const LocationInputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const LocationInputButton = styled.button`
  position: absolute;
  right: 10px;
  height: 100%;
  padding: 0 12px;
  background: ${({ theme }) => theme.colors.gray};
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const LocationInput = styled.input`
  width: 34.875rem;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 0.4375rem;
  border: 3px solid ${({ theme }) => theme.colors.lightGray};
  backdrop-filter: blur(2px);
  padding: 0.81rem 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.fonts.input1};

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LocationButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.black};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;
