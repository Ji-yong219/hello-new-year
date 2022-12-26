import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import APP_TITLE from '../utils/AppTitle'
import { AppTitle, Container } from './Main'

function MyPage() {
  const [info, setInfo] = React.useState({ nickName: '', moneny: 0 })
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
      <AppTitle>{APP_TITLE}</AppTitle>
      <Info>닉네임: {info.nickName}</Info>
      <Info>남은돈: {info.money}원</Info>
    </Container>
  )
}

const Info = styled.div`
  font-family: score;
  font-weight: 500;
  font-size: max(1.4rem, 24px);
`

export default MyPage
