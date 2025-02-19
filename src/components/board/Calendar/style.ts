import styled from '@emotion/styled';

export const Container = styled.div`
  width: 23.25rem;
  height: 50.125rem;
  padding: 1.06rem;
  border-radius: 2.1875rem;

  background-color: ${({ theme }) => theme.colors.container};

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CalendarHeader = styled.div`
  margin: 0.57rem 0.38rem 0.31rem 0.38rem;

  display: flex;
  gap: 0.81rem;
  align-items: center;

  > svg {
    width: 1.75rem;
    height: 1.75rem;
  }

  > h2 {
    ${({ theme }) => theme.fonts.title3};
  }
`;

export const CalendarBox = styled.div`
  width: 20.5625rem;
  height: 20.5625rem;
  margin: 0 0.31rem;

  background-color: ${({ theme }) => theme.colors.input};
`;

export const TaskList = styled.div`
  width: 100%;
  padding: 0.69rem 0.31rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddTaskButton = styled.button`
  padding: 0.87rem 0;
  border-radius: 1.0625rem;

  background-color: ${({ theme }) => theme.colors.input};

  > p {
    ${({ theme }) => theme.fonts.button3};
    color: ${({ theme }) => theme.colors.text};
  }
`;
