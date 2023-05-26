import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ACCESSORY_OPTION, RABBIT_OPTION } from '../utils/constant'
import Moon from './Moon'

function MyRabbit({ customRabbitColor, customRabbitAcc }) {
  const { rabbitColor, rabbitAcc } = useSelector(state => state.infoState)

  return (
    <Container>
      <RabbitContainer>
        <Rabbit
          src={
            RABBIT_OPTION[
              customRabbitColor !== undefined ? customRabbitColor : rabbitColor
            ]
          }
        />
        {
          ACCESSORY_OPTION[
            customRabbitAcc !== undefined ? customRabbitAcc : rabbitAcc
          ]
        }
      </RabbitContainer>
      <MoonContainer>
        <Moon />
      </MoonContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 75%;
  padding-top: 30%;
  padding-bottom: 10%;
`

const RabbitContainer = styled.div`
  position: relative;
  width: 70%;
`

const Rabbit = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
  z-index: 1;
`

const MoonContainer = styled.div`
  position: absolute;
  width: 45%;
  top: 15%;
  right: 0;
`

export default MyRabbit
