// src/main/frontend/src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import MailBox from './pages/MailBox'
import ReceiveMail from './pages/ReceiveMail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<CreateAccount />} />
          <Route path="/mail-box" element={<MailBox />} />
          <Route path="/receive-mail" element={<ReceiveMail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
