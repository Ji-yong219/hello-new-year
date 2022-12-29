import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setState } from '../../utils/reducers/loginState'

import { Wrapper } from '../Main'

import Logo from '../../components/Logo'
import MaterialIcon from '../../components/MaterialIcon'
import Promise from '../../components/Promise'
import SmallButtonItem from '../../components/SmallButtonItem'
import CustomContainer from '../../components/CustomContainer'
import Container from '../../components/Container'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { ResponseError } from '../../utils/error'
import MoneyInfo from './LoginMain/MoneyInfo'
import { setInfo } from '../../utils/reducers/infoState'
import MyRabbit from '../../components/MyRabbit'

function LoginMain() {
  const dispatch = useDispatch()

  const { token, uuid } = useSelector(state => state.loginState)
  const fetch = React.useCallback(
    async (token, uuid) => {
      try {
        const res = await axios.get(`/api/rabbit/mypage/${uuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        switch (res.status) {
          case 200:
            dispatch(
              setInfo(
                res.data.result.wish,
                res.data.result.money,
                res.data.result.custom
              )
            )
            break
          default:
            throw new ResponseError('잘못된 응답입니다.', res)
        }
      } catch (err) {
        const res = err.ResponseError

        switch (res.status) {
          case 401:
            alert('세션이 만료되었습니다. 다시 로그인해주세요.')
            dispatch(logout())
            window.location.reload()
            break
          case 404:
            alert(`${res.data.result.message}`)
            dispatch(logout())
            window.location.reload()
            break
          default:
            alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
            navigate('/')
        }
      }
    },
    [dispatch]
  )

  React.useEffect(() => {
    fetch(token, uuid)
  }, [])

  const navigate = useNavigate()
  return (
    <Container alt>
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

          <SmallButtonItem onClick={() => navigate(`/custom`)}>
            내 화면 꾸미기
          </SmallButtonItem>

          <SmallButtonItem
            background="--pink-50"
            color="--pink-500"
            onClick={() => dispatch(logout())}
          >
            로그아웃
          </SmallButtonItem>
        </ButtonWrapper>

        <Promise />

        <MoneyInfo />
      </Wrapper>

      <MyRabbit />

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
