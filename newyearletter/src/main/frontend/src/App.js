// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './Main';
import Login from './Login';

function App() {
  /*
   const [appTitle, setAppTitle] = useState('')
   const [mailbox_title, setMailboxTitle] = useState('')

    useEffect(() => {
        axios.get('/api/getAppTitle')
        .then(response => setAppTitle(response.data))
        .catch(error => console.log(error));

        axios.get('/api/getMailboxTitle')
        .then(response => setMailboxTitle(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
      <>
        <h1>{appTitle}</h1>
        <div>
          <div>{mailbox_title}</div>
        </div>
      </>
    );
    */

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