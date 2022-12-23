import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './Main.css';

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
  

  let [active, setActive] = useState(false);

  return (
    <>
      <h1>{appTitle}</h1>

      <button
        type="button"
        onClick={goToLogin}
        name=""
        className={active ? 'activeLoginBtn' : 'loginBtn'}
      >
        로그인
      </button>
      <br/>
      <button
        type="button"
        onClick={goToCreateAccount}
        name=""
        className={active ? 'activeCreateAccountBtn' : 'createAccountBtn'}
      >
        계정 생성
      </button>
    </>
  );
}

export default (Main);