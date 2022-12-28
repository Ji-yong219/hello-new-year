import React from 'react'
import ButtonItem from '../components/ButtonItem'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Promise from '../components/Promise'
import { WISH_INIT_STATE } from '../utils/constant'
import { SmallText } from './InviteLetter'
import { Contour, SubTitle, Wrapper } from './Main'
import CustomContainer from '../components/CustomContainer'

function Custom() {
  const [wish, setWish] = React.useState(WISH_INIT_STATE)
  return (
    <Container>
      <Logo sx={2.5} />
      <Wrapper gap={3}>
        <Wrapper gap={1}>
          <SmallText>2023년 새해 소망을 적어보세요!</SmallText>
          <Promise editable={true} defaultText={wish} setValue={setWish} />
        </Wrapper>

        <Contour />

        <Wrapper gap={2}>
          <SmallText>올해, 나만의 토끼를 꾸며보세요!</SmallText>
          <CustomContainer
            money={info.money}
            debug={false}
            color={info.custom.split(';')[0]}
            accessory={info.custom.split(';')[1]}
            isCustom={false}
          />
        </Wrapper>
      </Wrapper>
      <ButtonItem> 커스텀</ButtonItem>
    </Container>
  )
}

export default Custom
