/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Board from './pages/Board';
import Post from './pages/Post';
import MyPage from './pages/MyPage';
import Sidebar from './components/layout/sideBar';
import { AppContainer, ContentWrapper } from './components/layout/style';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'; // 기본값은 'dark'
  });

  useEffect(() => {
    document.body.className = theme; // body의 className 변경하여 테마 적용
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    if (newTheme === 'light') {
      localStorage.setItem('theme', 'light'); // light 모드 저장
    } else {
      localStorage.removeItem('theme'); // dark 모드는 저장 X (기본값)
    }
  };

  return (
    <Router>
      <AppContainer>
        <Sidebar />
        <ContentWrapper>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<Board />} />
            <Route path="/post" element={<Post />} />
            <Route
              path="/my-page"
              element={<MyPage theme={theme} setTheme={handleThemeChange} />}
            />
          </Routes>
        </ContentWrapper>
      </AppContainer>
    </Router>
  );
}

export default App;
