import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../utils/reducers/loginState'

import { Wrapper } from '../Main'

import Logo from '../../components/Logo'
import MaterialIcon from '../../components/MaterialIcon'
import Promise from '../../components/Promise'
import SmallButtonItem from '../../components/SmallButtonItem'
import Rabbit from './LoginMain/Rabbit'
import Container from '../../components/Container'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { ResponseError } from '../../utils/error'
import MoneyInfo from './LoginMain/MoneyInfo'

function LoginMain() {
  const dispatch = useDispatch()

  const { token, uuid } = useSelector(state => state.loginState)

  const [money, setMoney] = React.useState(0)

  const fetch = React.useCallback(
    async (token, uuid) => {
      try {
        const res = await axios.get(`/api/rabbit/mypage/${uuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (res.status === 200) {
          setMoney(res.data.result.money)
        } else {
          throw new ResponseError('잘못된 응답입니다.', res)
        }
      } catch (err) {
        const res = err.response
        console.log(res)
        if (res.status === 401) {
          alert('세션이 만료되었습니다. 다시 로그인해주세요.')
          dispatch(logout())
          window.location.reload()
        }
      }
    },
    [setMoney, dispatch]
  )

  React.useEffect(() => {
    fetch(token, uuid)
  }, [])

  const navigate = useNavigate()
  return (
    <Container>
      <Logo sx={2.5} />
      <Wrapper>
        <ButtonWrapper>
          <SmallButtonItem
            background="--white"
            color="--pink"
            onClick={() => navigate(`/letter/${uuid}`)}
          >
            <MaterialIcon iconName="link" color="--pink" /> 링크 복사
          </SmallButtonItem>

          <SmallButtonItem>내 화면 꾸미기</SmallButtonItem>

          <SmallButtonItem
            background="--pink-50"
            color="--pink-500"
            onClick={() => dispatch(logout())}
          >
            로그아웃
          </SmallButtonItem>
        </ButtonWrapper>

        <Promise defaultText="올해는 운동 열심히 하자" />

        <MoneyInfo value={money} />
      </Wrapper>

      <Rabbit />

      <Label>편지 공개까지 2일 3시간</Label>
    </Container>
  )
}

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Label = styled.div`
  width: 100%;

  font-family: nanumRound;
  font-weight: bold;
  font-size: max(1.2rem, 21px);

  text-align: center;

  background: white;
  color: var(--brown);
  padding: max(1rem, 18px);
`

export default LoginMain
