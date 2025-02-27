/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from '@emotion/react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { darkTheme, lightTheme } from './styles/theme';
import Login from './pages/Login';
import Board from './pages/Board';
import Post from './pages/Post';
import MyPage from './pages/MyPage';
import Sidebar from './components/layout/sideBar';
import { AppContainer, ContentWrapper } from './components/layout/style';
import { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyle';
import KakaoCallback from './pages/Login/KakaoCallback';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchBoards } from './hooks/Board/useFetchBoards';
import EmptyBoardPage from './pages/EmptyBoard';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken'); // 토큰 가져오기
    if (!token) {
      navigate('/login', { replace: true }); // 토큰이 없으면 로그인 페이지로 이동
    }
  }, [navigate]);

  return children;
};

function App() {
  const location = useLocation(); // 현재 경로 가져오기
  const navigate = useNavigate();
  const hiddenPaths: string[] = ['/login', '/kakao/callback']; // 사이드바 숨길 경로

  const shouldShowSidebar = !hiddenPaths.includes(location.pathname); // 숨길 경로에 해당하지 않을 때만 true

  const theme = localStorage.getItem('theme'); // 로컬스토리지에서 테마 가져오기
  const [isDarkMode, setIsDarkMode] = useState(!theme);

  const { data: boards, isLoading, isError } = useFetchBoards();

  useEffect(() => {
    // location.pathname이 '/' 일 때만 자동 이동
    if (location.pathname === '/' && !isLoading && !isError) {
      const boardList = boards ?? []; // boards가 undefined면 빈 배열 사용
      if (boardList.length === 0) {
        navigate('/empty-board');
      } else {
        navigate(`/${boardList[0].id}`);
      }
    }
  }, [boards, isLoading, isError, navigate, location.pathname]);

  const handleThemeChange = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
    if (isDarkMode === false) {
      localStorage.setItem('theme', 'light'); // light 모드 저장
    } else {
      localStorage.removeItem('theme'); // dark 모드는 저장 X (기본값)
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ToastContainer />
      <AppContainer>
        {/* shouldShowSidebar가 true일 때만 Sidebar 렌더링 */}
        {shouldShowSidebar && <Sidebar />}
        <ContentWrapper>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/kakao/callback" element={<KakaoCallback />} />

            {/* 게시판 목록이 없을 경우 "교실 없음" 페이지로 이동 */}
            <Route path="/empty-board" element={<EmptyBoardPage />} />

            {/* 게시판이 있을 경우 첫 번째 게시판으로 이동 */}
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Board />
                </RequireAuth>
              }
            />
            <Route
              path="/:boardId"
              element={
                <RequireAuth>
                  <Board />
                </RequireAuth>
              }
            />
            <Route
              path="/:boardId/:postId"
              element={
                <RequireAuth>
                  <Post />
                </RequireAuth>
              }
            />
            <Route
              path="/my-page"
              element={
                <RequireAuth>
                  <MyPage
                    isDarkMode={isDarkMode}
                    setIsDarkMode={handleThemeChange}
                  />
                </RequireAuth>
              }
            />
          </Routes>
        </ContentWrapper>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
