type ValuePiece = Date | null;
export type Value = ValuePiece;

export interface TaskCardProps {
  taskName: string;
  taskTime: string;
}

export interface ScheduleProps {
  scheduleId: number;
  title: string;
  startAt: string;
}
