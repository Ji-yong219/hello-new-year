import styled from 'styled-components'
import { Content, Focus, ModalContainer, Title } from './HelpModal'
import RabbitImg from '../assets/images/main.png'
import ButtonItem from './ButtonItem'
import { useNavigate } from 'react-router-dom'

function ExpireModal() {
  const navigate = useNavigate()
  return (
    <ModalContainer>
      <Rabbit src={RabbitImg} />
      <Title>
        <Focus>편지함을 확인하세요!</Focus>
      </Title>
      <Content>
        2023년 새해가 밝았어요. 이제 흑토끼가 가져온 묘한 편지함을 열어볼까요?
      </Content>
      <ButtonItem onClick={() => navigate('/letter-box')}>
        편지함 확인
      </ButtonItem>
    </ModalContainer>
  )
}

const Rabbit = styled.img`
  width: 40%;
`

export default ExpireModal
