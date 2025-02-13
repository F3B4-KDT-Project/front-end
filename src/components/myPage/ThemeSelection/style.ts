import styled from '@emotion/styled';

export const ThemeSelectionSection = styled.section`
  width: 21.875rem;
  height: 11.4375rem;
  border-radius: 1.0625rem;
  background: ${({ theme }) => theme.colors.gray};
  padding: 1.25rem 1.31rem;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.fonts.title5};
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
  border-radius: 0.4375rem;
  background-color: ${(props) =>
    props.isChecked ? '${({ theme }) => theme.colors.input}' : 'transparent'};

  label {
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.fonts.button2};
    cursor: pointer;
  }
`;

export const UncheckedCircle = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input};
`;
