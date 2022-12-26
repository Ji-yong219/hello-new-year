import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppTitle, Container } from './Main'
import APP_TITLE from '../utils/AppTitle'

import { ReactComponent as RabbitHead } from '../assets/test-svg/rabbit_head.svg';

function TestRabbitCustomizing() {
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
          <RabbitHead />
        </div>

        

        
      </Container>
    </>
  );
}

export default (TestRabbitCustomizing);