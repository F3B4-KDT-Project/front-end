import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0.5rem;
  border-radius: 1.0625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const TaskContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const TaskName = styled.p`
  ${({ theme }) => theme.fonts.caption6};
`;

export const TaskTime = styled.p`
  ${({ theme }) => theme.fonts.caption3};
`;

export const OptionsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
