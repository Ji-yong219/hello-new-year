import { useNavigate } from 'react-router-dom'
import ButtonItem from '../../components/ButtonItem'
import Logo from '../../components/Logo'
import { Wrapper } from '../Main'
import SendCompleteLabel from './SendCompleteLabel'
import SendCompleteText from './SendCompleteText'

function SendComplete() {
  const navigate = useNavigate()
  return (
    <Wrapper gap={4}>
      <Logo sx={1.75} />
      <SendCompleteLabel />
      <Wrapper gap={2}>
        <SendCompleteText />
        <ButtonItem onClick={() => navigate('/sign-up')}>
          계정 만들러 가기
        </ButtonItem>
      </Wrapper>
    </Wrapper>
  )
}

export default SendComplete
