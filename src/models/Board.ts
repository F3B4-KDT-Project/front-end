// models/Board.ts
export interface BoardResponse {
  id: number; // 게시판 ID
  title: string; // 게시판 이름
  createdAt: string; // 생성 날짜 (ISO 포맷)
  updatedAt: string; // 수정 날짜 (ISO 포맷)
}
