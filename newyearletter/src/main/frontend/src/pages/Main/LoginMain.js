import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setState } from '../../utils/reducers/loginState'

import { Wrapper } from '../Main'

import Logo from '../../components/Logo'
import MaterialIcon from '../../components/MaterialIcon'
import Promise from '../../components/Promise'
import SmallButtonItem from '../../components/SmallButtonItem'
import Container from '../../components/Container'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { ResponseError } from '../../utils/error'
import MoneyInfo from './LoginMain/MoneyInfo'
import { setInfo } from '../../utils/reducers/infoState'
import MyRabbit from '../../components/MyRabbit'
import setMetaTags from '../../utils/meta'
import { useLocation } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function LoginMain() {
  const { token, uuid } = useSelector(state => state.loginState)
  const [time, setTime] = React.useState(new Date())
  const [timeDiff, setTimeDiff] = React.useState(['0', '0'])

  const dispatch = useDispatch()

  const getTImeDiff = React.useCallback(() => {
    const newYear = new Date('2023-01-01 00:00:00')
    setTimeDiff(formatTimeDIff(newYear.getTime() - time.getTime()))
  }, [time])

  const formatTimeDIff = timeDiff => {
    const diff = Math.floor(timeDiff / 1000 / 60)
    const day = Math.floor(diff / (24 * 60))
    return [day, Math.floor((diff / 60) % 24), Math.floor(diff % 60)]
  }

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
            setTime(new Date(res.data.result.currentDateTime))
            break
          default:
            throw new ResponseError('잘못된 응답입니다.', res)
        }
      } catch (err) {
        const res = err.response
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

    const timer = setInterval(() => {
      setTime(prev => new Date(prev.getTime() + 1000))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  React.useEffect(() => {
    getTImeDiff()
  }, [time])

  const navigate = useNavigate()
  return (
    <Container alt>
      <Logo sx={2.5} />
      <Wrapper>
        <ButtonWrapper>
          <CopyToClipboard
            text={`${window.location.href}letter/${uuid}`}
            onCopy={() => alert('링크가 성공적으로 복사되었습니다.')}
          >
            <SmallButtonItem background="--white" color="--pink">
              <MaterialIcon iconName="link" color="--pink" /> 링크 복사
            </SmallButtonItem>
          </CopyToClipboard>

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

      <Label>
        편지 공개까지 {timeDiff[0]}일 {timeDiff[1]}시간 {timeDiff[2]}분
      </Label>
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
  font-size: 18px;

  border-radius: 9999px;
  border: 1px solid var(--pink-100);

  text-align: center;

  background: white;
  color: var(--brown);
  padding: 18px;
`

export default LoginMain
