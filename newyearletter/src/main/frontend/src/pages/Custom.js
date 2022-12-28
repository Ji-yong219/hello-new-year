import React from 'react'
import ButtonItem from '../components/ButtonItem'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Promise from '../components/Promise'
import { WISH_INIT_STATE } from '../utils/constant'
import { SmallText } from './InviteLetter'
import { Contour, SubTitle, Wrapper } from './Main'
import CustomContainer from '../components/CustomContainer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ResponseError } from '../utils/error'
import { logout } from '../utils/reducers/loginState'
import { useNavigate } from 'react-router-dom'

const CUSTOM_INIT_STATE = '2;0;1'

function Custom() {
  const { uuid, token } = useSelector(state => state.loginState)
  const [money, setMoney] = React.useState(0)
  const [wish, setWish] = React.useState(WISH_INIT_STATE)
  const [custom, setCustom] = React.useState(CUSTOM_INIT_STATE)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetch = React.useCallback(async () => {
    try {
      const res = await axios.get(`/api/rabbit/mypage/${uuid}/custom`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(res.data.result)

      switch (res.status) {
        case 200:
          setWish(res.data.result.wish)
          setCustom(res.data.result.custom)
          setMoney(res.data.result.money)
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
          navigate('/login')
          break
        case 404:
          console.log(res.data)
          alert(`${res.data.result.message}`)
          navigate('/')
          break
        default:
          alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
      }
    }
  }, [uuid, token])

  React.useEffect(() => {
    fetch()
  }, [])

  return (
    <Container>
      <Logo sx={2.5} />
      <Wrapper gap={3}>
        <Wrapper gap={1}>
          <SmallText>2023년 새해 소망을 적어보세요!</SmallText>
          <Promise editable={true} defaultText={wish} setValue={setWish} />
        </Wrapper>

        <Contour />

        <Wrapper gap={2}>
          <SmallText>올해, 나만의 토끼를 꾸며보세요!</SmallText>
          <CustomContainer
            money={money}
            debug={false}
            color={custom.split(';')[0]}
            accessory={custom.split(';')[1]}
            isCustom={false}
          />
        </Wrapper>
      </Wrapper>
      <ButtonItem> 커스텀</ButtonItem>
    </Container>
  )
}

export default Custom
