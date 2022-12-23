import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MailBox() {
  const [appTitle, setAppTitle] = useState('')
  const [mailboxTitle, setMailboxTitle] = useState('')

  useEffect(() => {
      axios.get('/api/getAppTitle')
      .then(response => setAppTitle(response.data))
      .catch(error => console.log(error));

      axios.get('/api/getMailboxTitle')
      .then(response => setMailboxTitle(response.data))
      .catch(error => console.log(error))
  }, []);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };
  
  let [active, setActive] = useState(false);

  return (
    <>
      <h1
        className="appTitle"
        onClick={goToMain}>{appTitle}
      </h1>

      <button
        type="button"
        // onClick={goToLogin}
        name=""
        className={active ? 'activeLoginBtn btn-1' : 'loginBtn btn-1'}
      >
        {mailboxTitle}
      </button>
    </>
  );
}

export default (MailBox);