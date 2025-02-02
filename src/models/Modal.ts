export interface BoardModalProps {
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
