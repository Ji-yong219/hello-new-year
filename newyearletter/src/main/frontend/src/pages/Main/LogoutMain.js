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
        <SubTitle>새해 멘트를 공유하고 응원의 편지를 받으세요!</SubTitle>
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
