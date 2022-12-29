import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ButtonItem from '../components/ButtonItem'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Promise from '../components/Promise'
import { Wrapper } from './Main'
import { ResponseError } from '../utils/error'
import { useDispatch, useSelector } from 'react-redux'
import { setInfo } from '../utils/reducers/infoState'
import MyRabbit from '../components/MyRabbit'

function InviteLetter() {
  const { uuid } = useParams()
  const [nickName, setNickname] = React.useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetch = React.useCallback(async uuid => {
    try {
      const res = await axios.get(`/api/rabbit/${uuid}`)

      switch (res.status) {
        case 200:
          setNickname(res.data.result.nickName)
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
      const res = err.response

      switch (res.status) {
        case 404:
          alert('해당 친구를 찾을 수 없습니다. 주소를 다시 확인해주세요.')
          navigate('/')
          break

        default:
          alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
          navigate('/')
      }
    }
  }, [])

  React.useEffect(() => {
    fetch(uuid)
  }, [])

  return (
    <Container alt>
      <Wrapper gap={2}>
        <Logo sx={2.5} />
        <SmallText>{nickName}님에게 응원의 편지를 적어주세요.</SmallText>
        <Promise />
      </Wrapper>

      <MyRabbit />

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
