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
  const [money, setMoney] = React.useState(350000)

  const navigate = useNavigate()

  const fetch = React.useCallback(async uuid => {
    try {
      const resp = await axios.get(`/api/rabbit/${uuid}`)
      setNickname(resp.data.result.nickName)
    } catch (err) {
      if (err.response.status === 404) {
        alert('해당 친구를 찾을 수 없습니다.')
        navigate('/')
      }

      alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
      navigate('/')
    }
  }, [])

  React.useEffect(() => {
    fetch(uuid)
  }, [])

  return (
    <Container>
      <Wrapper gap={2}>
        <Logo sx={2.5} />
        <SmallText>{nickName}님에게 응원의 편지를 적어주세요.</SmallText>
        <Promise defaultText="착하게 살자" />
      </Wrapper>

      <Moon money={money} />
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
