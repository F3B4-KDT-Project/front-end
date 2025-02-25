import styled from '@emotion/styled';
import Calendar from 'react-calendar';

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
  display: flex;
`;

export const CostomCalendar = styled(Calendar)`
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.input};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Pretendard';
  src: url('./assets/fonts/Pretendard-Medium.woff2') format('woff2');

  // 달력 제목 부분 오버라이딩.
  .react-calendar__navigation {
    margin: 0.5rem 0;
  }

  // 달력 상단 버튼.
  .react-calendar__navigation button {
    font-size: 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      ${({ theme }) => theme.fonts.title3};
      font-size: 1.125rem;
    }
  }

  // 달력 제목 클릭 비활성화.
  .react-calendar__navigation button:nth-child(2) {
    pointer-events: none;
  }

  // 달력력 버튼 배경 색 비활성화.
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: none;
    cursor: default;
  }

  // 달력 요일 부분 오버라이딩.
  .react-calendar__month-view__weekdays {
    ${({ theme }) => theme.fonts.caption2};
    font-weight: 500;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  // 달력 일 부분 오버라이딩.
  .react-calendar__tile {
    box-sizing: border-box;

    ${({ theme }) => theme.fonts.caption5};
    color: ${({ theme }) => theme.colors.black};
  }
  .react-calendar__tile abbr {
    padding: 0.3rem 0.4rem;
    border-radius: 50% !important;
  }

  // 달력 일 배경 표시 비활성화.
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--active {
    background: none;
  }

  // 선택된 달 외의 날짜 색 변경.
  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.colors.gray};
  }
  // 선택 불가 날짜 색 변경.
  .react-calendar__tile:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.gray};
  }

  .react-calendar__tile--now {
    background: none;
  }

  .react-calendar__tile--now abbr {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.text};
  }
  .react-calendar__tile--active abbr,
  .react-calendar__tile:enabled abbr:hover,
  .react-calendar__tile:enabled abbr:focus {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.black};
  }
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
