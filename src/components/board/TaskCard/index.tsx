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
  return (
    <Container>
      <TaskContent>
        <TaskName>{taskName}</TaskName>
        <TaskTime>{taskTime}</TaskTime>
      </TaskContent>
      <OptionsButton>
        <BsThreeDotsVertical />
      </OptionsButton>
    </Container>
  );
};

export default TaskCard;
