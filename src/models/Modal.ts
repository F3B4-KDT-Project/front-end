export interface BoardModalProps {
  onClose: () => void;
  onAddBoard?: (boardName: string) => void; // 선택적 속성으로 변경
  isOpen: boolean;
}

export interface AddBoardModalProps {
  onClose: () => void;
  onAddBoard: (boardName: string) => void;
}

export interface InvitePersonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface InviteRequest {
  boardId: number;
  loginId: string;
}

export interface InviteResponse {
  status: number;
  message: string;
}

export interface CreateBoardRequest {
  title: string;
}

export interface CreateBoardResponse {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface InviteDecisionProps extends BoardModalProps {
  notificationId: number;
  boardId: number;
}
