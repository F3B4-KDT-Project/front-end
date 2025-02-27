import { TaskCardProps } from '../../../models/Calendar';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
  Container,
  OptionsButton,
  TaskContent,
  TaskName,
  TaskTime,
} from './style';

const TaskCard = ({ taskName, taskTime }: TaskCardProps) => {
  const dateObj = new Date(taskTime);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const period = hours >= 12 ? 'pm' : 'am';
  const hours12 = hours % 12 || 12;
  const formattedTime = `${period} ${hours12}:${minutes.toString().padStart(2, '0')}`;
  return (
    <Container>
      <TaskContent>
        <TaskName>{taskName}</TaskName>
        <TaskTime>{formattedTime}</TaskTime>
      </TaskContent>
      <OptionsButton>
        <BsThreeDotsVertical />
      </OptionsButton>
    </Container>
  );
};

export default TaskCard;
