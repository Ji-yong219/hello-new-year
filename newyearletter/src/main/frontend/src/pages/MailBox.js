import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppTitle, Container } from './Main'
import APP_TITLE from '../utils/AppTitle'

function MailBox() {
  const [mailboxTitle, setMailboxTitle] = useState('')

  useEffect(() => {
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
    <Container>
      <AppTitle>{APP_TITLE}</AppTitle>

        <button
          type="button"
          // onClick={goToLogin}
          name=""
          className="mailBoxBtn"
        >
          {mailboxTitle}
        </button>
      </Container>
    </>
  );
}

export default (MailBox);