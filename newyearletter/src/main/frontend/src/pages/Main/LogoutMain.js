import { useNavigate } from 'react-router'
import ButtonItem from '../../components/ButtonItem'
import Container from '../../components/Container'
import Logo from '../../components/Logo'
import { SubTitle, Wrapper } from '../Main'

function LogoutMain() {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper gap={2}>
        <Logo />
        <SubTitle>2023년, 흑토끼의 묘한 편지함을 찾아오세요</SubTitle>
      </Wrapper>
      <Wrapper>
        <ButtonItem onClick={() => navigate('/login')}>로그인</ButtonItem>

        <ButtonItem
          background="--pink-100"
          onClick={() => navigate('/sign-up')}
        >
          회원가입
        </ButtonItem>
      </Wrapper>
    </Container>
  )
}

export default LogoutMain
