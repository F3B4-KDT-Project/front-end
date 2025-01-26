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

function App() {
  return (
    <Router>
      <AppContainer>
        <Sidebar theme="dark" /> 
        <ContentWrapper>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<Board />} />
            <Route path="/post" element={<Post />} />
            <Route path="/my-page" element={<MyPage />} />
          </Routes>
        </ContentWrapper>
      </AppContainer>
    </Router>
  );
}

export default App;
