import React from 'react'
import ButtonItem from '../components/ButtonItem'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Promise from '../components/Promise'
import {
  COLOR_OPTION,
  WISH_INIT_STATE,
  CUSTOM_INIT_STATE,
} from '../utils/constant'
import { SmallText } from './InviteLetter'
import { Wrapper } from './Main'
import CustomContainer from '../components/CustomContainer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ResponseError } from '../utils/error'
import { logout } from '../utils/reducers/loginState'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import cafeTypo from '../assets/images/typo_icon_cafe.png'
import chosunTypo from '../assets/images/typo_icon_chosun.png'
import maruTypo from '../assets/images/typo_icon_maru.png'
import SFTypo from '../assets/images/typo_icon_SF.png'
import { setInfo } from '../utils/reducers/infoState'

function Custom() {
  const { uuid, token } = useSelector(state => state.loginState)

  const { wish, money, wishFont, wishColor, rabbitAcc, rabbitColor } =
    useSelector(state => state.infoState)

  const [wishValue, setWish] = React.useState('')
  const [fontOption, setFont] = React.useState(0)
  const [colorOption, setColor] = React.useState(0)

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
          dispatch(
            setInfo(
              res.data.result.wish,
              res.data.result.money,
              res.data.result.custom
            )
          )
          setFont(wishFont)
          setColor(wishColor)
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
  React.useEffect(() => {
    console.log(wishValue)
  }, [wishValue])
  return (
    <Container>
      <Wrapper gap={4}>
        <Logo sx={2.5} />
        <Wrapper gap={1.5}>
          <SmallText>2023년 새해 소망을 적어보세요!</SmallText>
          <Promise
            editable={true}
            setValue={setWish}
            colorOption={colorOption}
            fontOption={fontOption}
          />

          <Wrapper gap={1}>
            <Option>
              <OptionLabel>폰트</OptionLabel>
              <OptionWrapper>
                <FontOption src={cafeTypo} onClick={() => setFont(0)} />
                <FontOption src={chosunTypo} onClick={() => setFont(1)} />
                <FontOption src={maruTypo} onClick={() => setFont(2)} />
                <FontOption src={SFTypo} onClick={() => setFont(3)} />
              </OptionWrapper>
            </Option>

            <Option>
              <OptionLabel>색상</OptionLabel>
              <OptionWrapper>
                <ColorOption colorOption={0} onClick={() => setColor(0)} />
                <ColorOption colorOption={1} onClick={() => setColor(1)} />
                <ColorOption colorOption={2} onClick={() => setColor(2)} />
                <ColorOption colorOption={3} onClick={() => setColor(3)} />
                <ColorOption colorOption={4} onClick={() => setColor(4)} />
                <ColorOption colorOption={5} onClick={() => setColor(5)} />
              </OptionWrapper>
            </Option>
          </Wrapper>
        </Wrapper>

        <Wrapper gap={2}>
          <SmallText>올해, 나만의 토끼를 꾸며보세요!</SmallText>
          <CustomContainer
            money={money}
            debug={false}
            color={rabbitColor}
            accessory={rabbitAcc}
            isCustom={true}
          />
          <SmallText>달 위상은 보유한 용돈만큼 늘어납니다!</SmallText>
        </Wrapper>
      </Wrapper>
      <ButtonItem> 커스텀</ButtonItem>
    </Container>
  )
}

const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--brown-100);
`

const OptionLabel = styled.div`
  font-family: nanumRound;
  font-weight: bold;
  font-size: 18px;
`

const OptionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  > * {
    cursor: pointer;
  }
`

const FontOption = styled.img`
  width: 32px;
  height: auto;
  object-fit: cover;
`

const ColorOption = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background-color: ${({ colorOption }) => COLOR_OPTION[colorOption]};
`

export default Custom
