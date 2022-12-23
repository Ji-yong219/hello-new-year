// src/main/frontend/src/App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;