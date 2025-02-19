import { IoIosCalendar } from 'react-icons/io';
import { TaskCardProps } from '../../../models/Calendar';
import TaskCard from '../TaskCard';

// 더미 데이터
const dummyTasks: TaskCardProps[] = [
  { taskName: 'Front-end 회의', taskTime: 'am 10:00' },
  { taskName: '전체 회의', taskTime: 'pm 12:00' },
  { taskName: 'Back-end 멘토링', taskTime: 'pm 08:00' },
];

const Calendar = () => {
  return (
    <div>
      <div>
        <IoIosCalendar />
        <h2>Calendar</h2>
      </div>
      <div></div>
      <div>
        {dummyTasks.map((task, index) => (
          <TaskCard
            key={index}
            taskName={task.taskName}
            taskTime={task.taskTime}
          />
        ))}
      </div>
      <button>일정 추가</button>
    </div>
  );
};

export default Calendar;
