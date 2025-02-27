import { useEffect, useState } from 'react';
import { FetchScheduleListApi } from '../../../apis/Board/calenderApi';
import { useParams } from 'react-router-dom';
import { IoIosCalendar } from 'react-icons/io';
import { ScheduleProps } from '../../../models/Calendar';
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
import { Value } from 'react-calendar/dist/esm/shared/types.js';
import AddScheduleModal from '../../modals/AddScheduleModal';

const Calendar = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [scheduleList, setScheduleList] = useState<ScheduleProps[]>([]);
  const [isAddScheduleModalOpen, setAddScheduleModalOpen] = useState(false);

  const loadSchedules = async () => {
    try {
      if (selectedDate) {
        const data = await FetchScheduleListApi(
          Number(boardId),
          selectedDate?.toString()
        );
        setScheduleList(data);
      }
    } catch (error) {
      console.log('스케줄 목록 로드 실패', error);
    }
  };

  useEffect(() => {
    loadSchedules();
  }, [selectedDate]);

  const handleDateChange = (date: Value) => {
    setSelectedDate(date);
  };

  return (
    <Container>
      <CalendarHeader>
        <IoIosCalendar />
        <h2>Calendar</h2>
      </CalendarHeader>
      <CalendarBox>
        <CostomCalendar
          onChange={handleDateChange}
          value={selectedDate}
          formatMonthYear={(_, date) =>
            `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`
          }
          formatDay={(_, date) => String(date.getDate()).padStart(2, '0')}
          prev2Label={null}
          next2Label={null}
          selectRange={false}
          minDate={new Date()}
          tileClassName={({ date }) => (date < new Date() ? 'past-date' : '')}
        />
      </CalendarBox>
      <TaskList>
        {scheduleList.map((schedule) => (
          <TaskCard
            key={schedule.scheduleId}
            taskName={schedule.title}
            taskTime={schedule.startAt}
          />
        ))}
      </TaskList>
      <AddTaskButton onClick={() => setAddScheduleModalOpen(true)}>
        <p>일정 추가</p>
      </AddTaskButton>

      <AddScheduleModal
        isOpen={isAddScheduleModalOpen}
        onClose={() => setAddScheduleModalOpen(false)}
      />
    </Container>
  );
};

export default Calendar;
