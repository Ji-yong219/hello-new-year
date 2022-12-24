import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppTitle, Container } from './Main'
import APP_TITLE from '../utils/AppTitle'

function ReceiveMail() {
  const toNickname = "Nickname";
  const fromNickname = "TestUser";

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };
  
  let [active, setActive] = useState(false);

  return (
    <>
      <Container>
        <AppTitle>{APP_TITLE}</AppTitle>

        
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
      </Container>
    </>
  );
}

export default (ReceiveMail);