import { TaskCardProps } from '../../../models/Calendar';
import { BsThreeDotsVertical } from 'react-icons/bs';

const TaskCard = ({ taskName, taskTime }: TaskCardProps) => {
  return (
    <div>
      <div>
        <p>{taskName}</p>
        <p>{taskTime}</p>
      </div>
      <button>
        <BsThreeDotsVertical />
      </button>
    </div>
  );
};

export default TaskCard;
