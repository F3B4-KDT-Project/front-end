/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from '@emotion/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { darkTheme, lightTheme } from './styles/theme';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Board from './pages/Board';
import Post from './pages/Post';
import MyPage from './pages/MyPage';
import Sidebar from './components/layout/sideBar';
import { AppContainer, ContentWrapper } from './components/layout/style';
import { useState } from 'react';
import GlobalStyles from './styles/GlobalStyle';

// const RequireAuth = ({ children }: { children: JSX.Element }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('accessToken'); // 토큰 가져오기
//     if (!token) {
//       navigate('/sign-in', { replace: true }); // 토큰이 없으면 로그인 페이지로 이동
//     }
//   }, [navigate]);

//   return children;
// };

function App() {
  const location = useLocation(); // 현재 경로 가져오기
  const hiddenPaths: string[] = ['/sign-in', '/sign-up']; // 사이드바 숨길 경로

  const shouldShowSidebar = !hiddenPaths.includes(location.pathname); // 숨길 경로에 해당하지 않을 때만 true

  const theme = localStorage.getItem('theme'); // 로컬스토리지에서 테마 가져오기
  const [isDarkMode, setIsDarkMode] = useState(!theme);

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
      <AppContainer>
        {/* shouldShowSidebar가 true일 때만 Sidebar 렌더링 */}
        {shouldShowSidebar && <Sidebar />}
        <ContentWrapper>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />

            <Route
              path="/"
              element={
                // <RequireAuth>
                <Board />
                // </RequireAuth>
              }
            />
            <Route
              path="/:boardId"
              element={
                // <RequireAuth>
                <Board />
                // </RequireAuth>
              }
            />
            <Route
              path="/:boardId/:postId"
              element={
                // <RequireAuth>
                <Post />
                // </RequireAuth>
              }
            />
            <Route
              path="/my-page"
              element={
                // <RequireAuth>
                <MyPage
                  isDarkMode={isDarkMode}
                  setIsDarkMode={handleThemeChange}
                />
                //  </RequireAuth>
              }
            />
          </Routes>
        </ContentWrapper>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
