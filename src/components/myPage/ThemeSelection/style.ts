import styled from '@emotion/styled';

export const ThemeSelectionSection = styled.section`
  width: 21.875rem;
  height: 11.4375rem;
  border-radius: 1.0625rem;
  background: var(--gray);
  padding: 1.25rem 1.31rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;

  h2 {
    color: var(--white);
    font-family: 'Pretendard Variable';
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ThemeSelectionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  }
`;

export const RadioOption = styled.div<{ isChecked: boolean }>`
  height: 2.8125rem;
  display: flex;
  align-items: center;
  gap: 0.94rem;
  cursor: pointer;
  padding: 0.69rem;
  box-sizing: border-box;
  border-radius: 0.4375rem;
  background-color: ${(props) =>
    props.isChecked ? 'var(--input)' : 'transparent'};

  label {
    color: var(--white);
    font-family: 'Pretendard Variable';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
`;

export const UncheckedCircle = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--input, rgba(218, 218, 218, 0.35));
`;
