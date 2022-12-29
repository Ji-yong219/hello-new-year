import React from 'react'

import styled from 'styled-components'
import CustomRabbit from '../components/Rabbit'
import Moon from '../components/Moon'

const Container = styled.div`
  position: relative;
  width: 360px;
  min-height: 700px;

  animation: loading 0.6s 1 ease-out alternate;
  background: black; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(
    bottom,
    rgba(10, 20, 20, 1),
    rgba(0, 16, 54, 0.9)
  ); /*Safari 5.1-6*/
  background: -o-linear-gradient(
    bottom,
    rgba(10, 20, 20, 1),
    rgba(0, 16, 54, 0.9)
  ); /*Opera 11.1-12*/
  background: -moz-linear-gradient(
    bottom,
    rgba(10, 20, 20, 1),
    rgba(0, 16, 54, 0.9)
  ); /*Fx 3.6-15*/
  background: linear-gradient(
    to bottom,
    rgba(10, 20, 20, 1),
    rgba(0, 16, 54, 0.9)
  ); /*Standard*/
`
const MoonContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translateX(-50%) rotate(200deg);
`
const RabbitContainer = styled.div`
  position: absolute;
  top: 250px;
`

function CustomContainer({
  money = 150000,
  debug = false,
  color = 2,
  accessory = 0,
  isCustom = true,
}) {
  return (
    <>
      <Container>
        <MoonContainer>
          <Moon money={money} debug={debug} />
        </MoonContainer>
        <RabbitContainer>
          <CustomRabbit
            color={color}
            accessory={accessory}
            isCustom={isCustom}
          />
        </RabbitContainer>
      </Container>
    </>
  )
}
export default CustomContainer
