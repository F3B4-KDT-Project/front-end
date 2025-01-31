import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 7.875rem;
  width: 100%;
  min-height: 100vh;
  background: var(--modal-bg);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray);
  background: var(--background);
  padding: 2rem;
  box-shadow:
    0px 0px 4px 0px var(--light-gray) inset,
    0px 0px 4px 0px var(--black);

  h3 {
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 1.69rem;
    margin-bottom: 1.06rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.37rem;

  h2 {
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .CloseButton {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--light-gray);
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.125rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  background-color: var(--gray);
  margin-bottom: 1.37rem;
`;

export const InputFieldWrapper = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  width: 34.875rem;
  height: 2rem;
  flex-shrink: 0;
  background: var(--input);
  border-radius: 0.4375rem;
  border: 3px solid var(--light-gray);
  backdrop-filter: blur(2px);
  padding: 0.81rem 1.3rem;
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ErrorMessage = styled.div`
  color: var(--red);
  text-align: right;
  font-family: 'Pretendard';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: -1.5rem;
  right: 0;
`;

export const SuccessMessage = styled.div`
  color: var(--light-gray);
  text-align: right;
  font-family: 'Pretendard';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  top: -1.5rem;
  right: 0;
`;

export const IdList = styled.div`
  display: flex; /* flex container 설정 */
  flex-direction: row; /* 가로 정렬 */
  gap: 0.5rem; /* 아이템 간 간격 */
  flex-wrap: wrap; /* 아이템이 넘칠 경우 줄바꿈 */
  margin-top: 0.88rem;

  .email-item {
    width: 10.625rem;
    height: 1.75rem;
    flex-shrink: 0;
    border: 1px solid var(--light-gray);
    border-radius: 1.875rem;
    background: var(--input);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.69rem 0.88rem;
    color: var(--light-gray);
    font-family: 'Pretendard';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .CloseEmailButton {
    width: 0.9375rem;
    height: 0.9375rem;
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--light-gray);
    font-family: 'Pretendard';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.94rem;
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20.6875rem;
  height: 4.0625rem;
  flex-shrink: 0;
  border-radius: 0.4375rem;
  background: var(--input);
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--black);
  }
`;
