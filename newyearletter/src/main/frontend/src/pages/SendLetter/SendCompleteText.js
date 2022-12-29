import styled from 'styled-components'

import FlowerImg from '../../assets/images/flower.png'

function SendCompleteText() {
  return (
    <Container>
      <Flower src={FlowerImg} />
      <Content>
        함께 새해 다짐을 공유하고 응원을 받아보세요.
        <br />
        2023년, 토끼가 모두의 마음을 전달해드립니다.
      </Content>
      <Flower src={FlowerImg} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: max(0.5rem, 9px);
`

const Flower = styled.img`
  width: max(2rem, 36px);
`

const Content = styled.div`
  font-family: nanumRound;
  font-weight: 600;
  font-size: max(0.6rem, 12px);
  line-height: max(1.1rem, 22px);
  text-align: center;
`

export default SendCompleteText
