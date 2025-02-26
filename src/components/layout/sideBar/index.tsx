import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideBar, AddButton, ProfileButton, BoardItem } from './style';
import { IoIosAdd } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import AddBoardModal from '../../modals/AddBoardModal';
import { useFetchBoards } from '../../../hooks/Board/useFetchBoards';
import { useQueryClient } from '@tanstack/react-query';
import { BoardResponse } from '../../../models/Board'; // ✅ BoardResponse 타입 import

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  // ✅ `boards` 상태 추가하여 즉시 반영 가능하도록 수정
  const { data, isPending } = useFetchBoards();
  const [boards, setBoards] = useState<BoardResponse[]>([]);

  // ✅ API 응답이 변경될 때마다 `boards` 상태 업데이트
  useEffect(() => {
    if (data) {
      setBoards(data); // API 응답을 boards 상태로 저장
    }
  }, [data]);

  // ✅ 게시판 추가 후 목록 갱신
  const handleAddBoard = (boardName: string) => {
    const newBoard: BoardResponse = {
      id: Date.now(), // ✅ 임시 ID 생성
      title: boardName,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setBoards((prevBoards) => [...prevBoards, newBoard]); // ✅ 즉시 UI 반영
    queryClient.invalidateQueries({ queryKey: ['boards'] }); // ✅ 최신화
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBoardClick = (boardId: number) => {
    navigate(`/${boardId}`); // 📌 클릭한 게시판 ID로 이동
    console.log('Clicked board:', boardId);
  };

  const handleProfileClick = () => {
    // 프로필 버튼 클릭 이벤트 (추후 기능 추가 가능)
  };

  const hiddenPaths: string[] = ['/sign-in', '/sign-up'];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <SideBar>
      <div>
        {/* 로딩 중일 때 로딩 표시 */}
        {isPending ? (
          <p>로딩 중...</p>
        ) : (
          boards.map(
            (
              board: BoardResponse // ✅ `board` 타입 명시
            ) => (
              <BoardItem
                key={board.id}
                onClick={() => handleBoardClick(board.id)}
              >
                {board.title}
              </BoardItem>
            )
          )
        )}
        <AddButton onClick={handleAddClick}>
          <IoIosAdd className="AddIcon" />
        </AddButton>
      </div>
      <ProfileButton onClick={handleProfileClick}>
        <BsFillPersonFill className="ProfileIcon" />
      </ProfileButton>
      {isModalOpen && (
        <AddBoardModal onClose={handleCloseModal} onAddBoard={handleAddBoard} />
      )}
    </SideBar>
  );
};

export default Sidebar;
