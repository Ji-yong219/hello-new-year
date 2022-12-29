import styled from 'styled-components'
import { ACCESSORY_OPTION, RABBIT_OPTION } from '../utils/constant'

function MyRabbit({ rabbitColor, rabbitAcc }) {
  return (
    <RabbitContainer>
      <Rabbit src={RABBIT_OPTION[rabbitColor]} />
      {ACCESSORY_OPTION[rabbitAcc]}
    </RabbitContainer>
  )
}

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

export default MyRabbit
