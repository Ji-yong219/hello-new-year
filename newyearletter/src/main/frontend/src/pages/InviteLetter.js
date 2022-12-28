import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ButtonItem from '../components/ButtonItem'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Promise from '../components/Promise'
import { SubTitle, Wrapper } from './Main'
import Rabbit from './Main/LoginMain/Rabbit'
import Moon from '../components/Moon'

function InviteLetter() {
  const { uuid } = useParams()
  const [nickName, setNickname] = React.useState('')
  const money = 350000

  const fetch = React.useCallback(async uuid => {
    const resp = await axios.get(`/api/letter/${uuid}`, {})
    setNickname(resp.data.result.nickName)
  }, [])

  React.useEffect(() => {
    fetch(uuid)
  }, [])

  const navigate = useNavigate()

  return (
    <Container>
      <Wrapper gap={2}>
        <Logo sx={2.5} />
        <SmallText>{nickName}님에게 응원의 편지를 적어주세요.</SmallText>
        <Promise defaultText="착하게 살자" />
      </Wrapper>

      <Moon money={money}/>
      <Rabbit />

      <ButtonItem onClick={() => navigate('send/', { state: nickName })}>
        편지 작성하기
      </ButtonItem>
    </Container>
  )
}

export const SmallText = styled.div`
  font-family: nanumRound;
  font-weight: bold;
  font-size: max(0.9rem, 16px);
  color: var(--brown);
`

export default InviteLetter
