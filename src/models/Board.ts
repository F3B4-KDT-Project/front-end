// models/Board.ts
export interface BoardResponse {
  boardId: number; // 게시판 ID
  title: string; // 게시판 이름
  createdAt: string; // 생성 날짜 (ISO 포맷)
  updatedAt: string; // 수정 날짜 (ISO 포맷)
  participants?: number; // ✅ 참가자 수 추가 (API 응답 확인 후 적용)
}
