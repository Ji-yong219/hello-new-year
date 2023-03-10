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
import { useLocation } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import HelpModal, { Content, SmallContent } from '../../components/HelpModal'
import ExpireModal from '../../components/ExpireModal'
import { freeLoading, setLoading } from '../../utils/reducers/loadingState'
import Loading from '../../components/Loading'

function LoginMain() {
  const { token, uuid } = useSelector(state => state.loginState)
  const { state } = useLocation()
  const [time, setTime] = React.useState(new Date())
  const [timeDiff, setTimeDiff] = React.useState([0, 0, 0])

  const [helpOpen, setHelpOpen] = React.useState(
    state !== null ? state.isFirst : false
  )

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
        dispatch(setLoading())
        const res = await axios.get(`/api/rabbit/mypage/${uuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        dispatch(freeLoading())
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
            throw new ResponseError('????????? ???????????????.', res)
        }
      } catch (err) {
        const res = err.ResponseError
        dispatch(freeLoading())
        switch (res.status) {
          case 401:
            alert('????????? ?????????????????????. ?????? ?????????????????????.')
            dispatch(logout())
            window.location.reload()
            break
          case 404:
            alert(`${res.data.result.message}`)
            dispatch(logout())
            window.location.reload()
            break
          default:
            alert('????????? ????????? ??? ????????????. ?????? ??? ?????? ??????????????????.')
            navigate('/')
        }
      }
    },
    [dispatch]
  )

  React.useEffect(() => {
    fetch(token, uuid)
    // const timer = setInterval(() => {
    //   setTime(prev => new Date(prev.getTime() + 1000))
    // }, 1000)

    // return () => {
    //   clearInterval(timer)
    // }
  }, [])

  React.useEffect(() => {
    getTImeDiff()
  }, [time])
  // console.log(timeDiff)
  // console.log(timeDiff === [0, 0, 0])
  const navigate = useNavigate()
  return (
    <Container alt>
      <ExpireModal />
      {/* {parseInt(timeDiff[0]) === 0 &&
      parseInt(timeDiff[1]) === 0 &&
      parseInt(timeDiff[2]) === 0 ? (
        <ExpireModal />
      ) : helpOpen ? (
        <HelpModal setModalOpen={setHelpOpen} />
      ) : null} */}
      <Logo sx={1.75} />
      <Wrapper gap={2}>
        <ButtonWrapper>
          <CopyToClipboard
            text={`${window.location.href}letter/${uuid}`}
            onCopy={() => alert('????????? ??????????????? ?????????????????????.')}
          >
            <SmallButtonItem background="--white" color="--pink">
              <MaterialIcon iconName="link" color="--pink" /> ?????? ??????
            </SmallButtonItem>
          </CopyToClipboard>

          <SmallButtonItem onClick={() => navigate(`/custom`)}>
            ??? ?????? ?????????
          </SmallButtonItem>

          <SmallButtonItem
            background="--pink-50"
            color="--pink-500"
            onClick={() => dispatch(logout())}
          >
            ????????????
          </SmallButtonItem>
        </ButtonWrapper>

        <Wrapper gap={0.5}>
          <Promise />
          <SmallTextButton onClick={() => setHelpOpen(true)}>
            ?????? ????????? ??????????????????? <Focus>????????? ??????</Focus>
          </SmallTextButton>
        </Wrapper>

        <MoneyInfo />

        <MyRabbit />

        <Wrapper gap={2}>
          {/* <Label>
            ?????? ???????????? {timeDiff[0]}??? {timeDiff[1]}?????? {timeDiff[2]}???
          </Label> */}

          <Label>2023??? ?????? ??? ?????? ????????????!</Label>
          <Copyright>
            Copyright 2023. ????????? ????????? ????????? ????????? ????????? ????????? ?????????
            ????????? all rights reserved. contact: corleone@kakao.com
          </Copyright>
        </Wrapper>
      </Wrapper>
      <Loading />
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

export const Copyright = styled.div`
  font-family: nanumRound;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  color: var(--brown-100);
  white-space: keep-all;
`

const SmallTextButton = styled(Content)`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`

const Focus = styled.span`
  color: var(--pink);
  font-weight: 700;
`
export default LoginMain
