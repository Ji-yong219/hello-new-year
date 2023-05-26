import styled from 'styled-components'

import FlowerImg from '../assets/images/flower.png'

function FlowerText({ children }) {
  return (
    <Container>
      <Flower src={FlowerImg} />
      {children}
      <Flower src={FlowerImg} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

const Flower = styled.img`
  width: max(2rem, 36px);
`

export default FlowerText
