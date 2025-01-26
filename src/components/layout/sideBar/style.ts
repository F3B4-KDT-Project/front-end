import styled from "@emotion/styled";

// 테마에 따라 색상을 설정하는 함수
const getBackground = (theme: "dark" | "light") =>
  theme === "dark"
    ? "var(--bc_navigation_gr, linear-gradient(180deg, #5A5A5A 0%, #4D4D4D 39.5%, #161616 100%))"
    : "linear-gradient(180deg, #FFF 0%, #CBCBCB 60%, #ACACAC 100%)";

const getBoxShadow = (theme: "dark" | "light") =>
  theme === "dark"
    ? "4px 0px 10px 5px rgba(0, 0, 0, 0.25), 0px 0px 4px 0px rgba(180, 180, 180, 0.25) inset"
    : "4px 0px 10px 5px var(--wh_nav_dpshd, rgba(255, 255, 255, 0.50)), 0px 0px 4px 0px var(--bg_board_select, rgba(22, 22, 22, 0.35)) inset";

export const SideBar = styled.div<{ theme: "dark" | "light" }>`
  width: 7.875rem;
  height: 100vh;
  background: ${({ theme }) => getBackground(theme)};
  box-shadow: ${({ theme }) => getBoxShadow(theme)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem; 
  cursor: pointer; 
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
  }
`;

// Profile 버튼 스타일
export const ProfileButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem; 
  align-items: center;
  cursor: pointer; 
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
  }
`;
