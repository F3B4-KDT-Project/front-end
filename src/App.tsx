import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Board from './pages/Board'
import Post from './pages/Post'
import MyPage from './pages/MyPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />

        <Route path='/' element={<Board />} />
        <Route path='/post' element={<Post />} />

        <Route path='/my-page' element={<MyPage />} />
      </Routes>
    </Router>
  )
}

export default App
