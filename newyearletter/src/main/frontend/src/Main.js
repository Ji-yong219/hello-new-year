import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Main() {
  const [appTitle, setAppTitle] = useState('')

  useEffect(() => {
      axios.get('/api/getAppTitle')
      .then(response => setAppTitle(response.data))
      .catch(error => console.log(error))
  }, []);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  };
  const goToCreateAccount = () => {
    navigate('/CreateAccount');
  };
  const goToMailBox = () => {
    navigate('/MailBox');
  };
  const goToReceiveMail = () => {
    navigate('/ReceiveMail');
  };
  

  let [active, setActive] = useState(false);

  return (
    <>
      <h1
        className="appTitle">{appTitle}
      </h1>

      <button
        type="button"
        onClick={goToLogin}
        name=""
        className={active ? 'activeLoginBtn btn-1' : 'loginBtn btn-1'}
      >
        로그인
      </button>
      
      <button
        type="button"
        onClick={goToCreateAccount}
        name=""
        className={active ? 'activeCreateAccountBtn btn-1' : 'createAccountBtn btn-1'}
      >
        계정 생성
      </button>
      
      
      <button
        type="button"
        className='btn-1'
        onClick={goToMailBox}
        name=""
      >
        [임시] 우체통 페이지
      </button>
      
      <button
        type="button"
        className='btn-1'
        onClick={goToReceiveMail}
        name=""
      >
        [임시] 받은 편지 페이지
      </button>
    </>
  );
}

export default (Main);