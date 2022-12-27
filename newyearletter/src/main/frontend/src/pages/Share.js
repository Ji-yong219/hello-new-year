import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ButtonItem from '../components/ButtonItem'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Promise from '../components/Promise'
import { SubTitle, Wrapper } from './Main'
import Rabbit from './Main/LoginMain/Rabbit'

function Share() {
  const { uuid } = useParams()
  const [nickName, setNickname] = React.useState('')

  const attemptJoin = React.useCallback(async uuid => {
    const resp = await axios.get(`/api/letter/${uuid}`, {})
    console.log(resp)
    setNickname(resp.data.result.nickName)
  }, [])

  React.useEffect(() => {
    attemptJoin(uuid)
  }, [])

  return (
    <Container>
      <Wrapper gap={2}>
        <Logo sx={2} />
        <SmallText>{nickName}에게 응원의 편지를 적어주세요.</SmallText>
        <Promise defaultText="착하게 살자" />
      </Wrapper>
      <Rabbit />
      <ButtonItem>편지 작성하기</ButtonItem>
    </Container>
  )
}

export const SmallText = styled.div`
  font-family: nanumRound;
  font-weight: bold;
  font-size: max(0.9rem, 16px);
  color: var(--brown);
`

export default Share
