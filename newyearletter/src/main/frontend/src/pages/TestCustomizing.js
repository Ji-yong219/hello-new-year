import Container from '../components/Container'
import Logo from '../components/Logo'
import Promise from '../components/Promise'
import { Wrapper } from './Main'

import CustomRabbit from '../components/Rabbit'
import Moon from '../components/Moon'

function TestCustomizing() {
  return (
    <>
    <Container>
      <Wrapper gap={2}>
        <Logo sx={2.5} />
        <Promise defaultText="커스터마이징 연구 중.." />
      </Wrapper>

      <CustomRabbit />
      <Moon money={350000} />
    </Container>
    </>
  )
}

export default TestCustomizing