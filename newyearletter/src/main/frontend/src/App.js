// src/main/frontend/src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import ReceiveMail from './pages/ReceiveMail'
import MyPage from './pages/MyPage'
import TestRabbitCustomizing from './pages/TestRabbitCustomizing'
import React from 'react'
import LetterBox from './pages/LetterBox'

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  React.useEffect(() => {
    setScreenSize()
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="/letter-box" element={<LetterBox />} />
        <Route path="/receive-mail" element={<ReceiveMail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route
          path="/TestRabbitCustomizing"
          element={<TestRabbitCustomizing />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
