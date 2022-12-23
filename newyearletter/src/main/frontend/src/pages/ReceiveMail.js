import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ReceiveMail() {
  const [appTitle, setAppTitle] = useState('')
  const toNickname = "Nickname";
  const fromNickname = "TestUser";

  useEffect(() => {
      axios.get('/api/getAppTitle')
      .then(response => setAppTitle(response.data))
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

      
      <div className="wrapper">
        <div className="lid one"></div>
        <div className="lid two"></div>
        <div className="envelope"></div>
        <div className="letter">
          <p>To. {toNickname}</p>
          <pre>안녕하세요 테스트 내용입니다 내년에도 하시는 일 다 잘 되길 바랄게요</pre>
          <p>From. {fromNickname}</p>
        </div>
      </div>
    </>
  );
}

export default (ReceiveMail);