// src/main/frontend/src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import CreateAccount from './CreateAccount';
import MailBox from './MailBox';

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/CreateAccount" element={<CreateAccount/>} />
            <Route path="/MailBox" element={<MailBox/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;