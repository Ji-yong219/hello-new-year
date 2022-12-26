import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppTitle, Container } from './Main'

import { Rabbit } from '../components/Rabbit';

function TestRabbitCustomizing() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide Component" : "Show Component";
  

  return (
    <>
      <Container>
        <Rabbit />
      </Container>
    </>
  );
}

export default (TestRabbitCustomizing);