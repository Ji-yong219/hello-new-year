import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Moon from '../components/Moon'

function MyPage() {
  const [info, setInfo] = React.useState({ nickName: '테스트 닉네임', money: 350000 })
  const { token, url } = useSelector(state => state.loginState)

  const attemptJoin = React.useCallback(async (token, url) => {
    const resp = await axios.get(`/api/letter/myPage/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setInfo(resp.data.result)
  }, [])

  React.useEffect(() => {
    attemptJoin(token, url)
  }, [])

  return (
    <Container>
      <Logo />
      <Info>닉네임: {info.nickName}</Info>
      <Info>내가 받은 용돈: {info.money}원</Info>
      <Moon money={info.money}/>
    </Container>
  )
}

const Info = styled.div`
  font-family: score;
  font-weight: 500;
  font-size: max(1.4rem, 24px);
`

export default MyPage
