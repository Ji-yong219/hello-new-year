import styled from 'styled-components'
import RabbitImg from '../../../assets/images/rabbit.png'

function Rabbit() {
  return <Container src={RabbitImg} />
}

const Container = styled.img`
  width: 60%;
`

export default Rabbit
