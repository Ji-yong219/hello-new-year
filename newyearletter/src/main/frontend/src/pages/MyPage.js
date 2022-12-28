import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Container from '../components/Container'
import Logo from '../components/Logo'
import CustomContainer from '../components/CustomContainer'

function MyPage() {
  const [info, setInfo] = React.useState({ nickName: '', money: 0, custom: '1;1;2;1;0'})
  const { token, uuid } = useSelector(state => state.loginState)

  const attemptJoin = React.useCallback(async (token, uuid) => {
    const resp = await axios.get(`/api/rabbit/mypage/${uuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setInfo(resp.data.result)
  }, [])

  React.useEffect(() => {
    attemptJoin(token, uuid)
  }, [])

  return (
    <Container>
      <Logo />
      <Info>닉네임: {info.nickName}</Info>
      <Info>내가 받은 용돈: {info.money}원</Info>
      
      <CustomContainer
        money={info.money}
        debug={false}
        color={info.custom.split(';')[0]}
        accessory={info.custom.split(';')[1]}
        isCustom={false}
      />
    </Container>
  )
}

const Info = styled.div`
  font-family: score;
  font-weight: 500;
  font-size: max(1.4rem, 24px);
`

export default MyPage
