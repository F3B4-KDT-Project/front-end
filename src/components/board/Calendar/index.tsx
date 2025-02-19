import { IoIosCalendar } from 'react-icons/io';
import { TaskCardProps } from '../../../models/Calendar';
import TaskCard from '../TaskCard';
import 'react-calendar/dist/Calendar.css';
import {
  AddTaskButton,
  CalendarBox,
  CalendarHeader,
  Container,
  CostomCalendar,
  TaskList,
} from './style';

// 더미 데이터
const dummyTasks: TaskCardProps[] = [
  { taskName: 'Front-end 회의', taskTime: 'am 10:00' },
  { taskName: '전체 회의', taskTime: 'pm 12:00' },
  { taskName: 'Back-end 멘토링', taskTime: 'pm 08:00' },
];

const Calendar = () => {
  return (
    <Container>
      <CalendarHeader>
        <IoIosCalendar />
        <h2>Calendar</h2>
      </CalendarHeader>
      <CalendarBox>
        <CostomCalendar
          formatMonthYear={(_, date) =>
            `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`
          }
          formatDay={(_, date) => String(date.getDate()).padStart(2, '0')}
          prev2Label={null}
          next2Label={null}
          minDate={new Date()}
          tileClassName={({ date }) => (date < new Date() ? 'past-date' : '')}
        />
      </CalendarBox>
      <TaskList>
        {dummyTasks.map((task, index) => (
          <TaskCard
            key={index}
            taskName={task.taskName}
            taskTime={task.taskTime}
          />
        ))}
      </TaskList>
      <AddTaskButton>
        <p>일정 추가</p>
      </AddTaskButton>
    </Container>
  );
};

export default Calendar;
