import React from 'react'
import ButtonItem from '../components/ButtonItem'
import Container from '../components/Container'
import Logo from '../components/Logo'
import Promise from '../components/Promise'
import {
  ACCESSORY_OPTION,
  FONT_COLOR_OPTION,
  FONT_OPTION,
  FONT_TYPO_OPTION,
  RABBIT_COLOR_OPTION,
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

import { setInfo } from '../utils/reducers/infoState'

function Custom() {
  const { uuid, token } = useSelector(state => state.loginState)

  const { wish, money, wishFont, wishColor, rabbitAcc, rabbitColor } =
    useSelector(state => state.infoState)

  const [wishValue, setWish] = React.useState('')

  const [rabbitColorValue, setRabbitColor] = React.useState(2)
  const [rabbitAccValue, setRabbitAcc] = React.useState(0)

  const [fontValue, setFont] = React.useState(0)
  const [fontColorValue, setFontColor] = React.useState(0)

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
          setFontColor(wishColor)
          setRabbitColor(rabbitColor)
          setRabbitAcc(rabbitAcc)
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
      <Wrapper gap={4}>
        <Logo sx={2.5} />
        <Wrapper gap={1.5}>
          <SmallText>2023년 새해 소망을 적어보세요!</SmallText>
          <Promise
            editable={true}
            setValue={setWish}
            color={FONT_COLOR_OPTION[fontColorValue]}
            font={FONT_OPTION[fontValue]}
          />

          <Wrapper gap={1}>
            <Option>
              <OptionLabel>폰트</OptionLabel>
              <OptionWrapper>
                {FONT_TYPO_OPTION.map((typo, index) => (
                  <IconOption
                    key={index}
                    src={typo}
                    onClick={() => setFont(index)}
                  />
                ))}
              </OptionWrapper>
            </Option>

            <Option>
              <OptionLabel>색상</OptionLabel>
              <OptionWrapper>
                {FONT_COLOR_OPTION.map((color, index) => (
                  <ColorOption
                    key={index}
                    color={color}
                    onClick={() => setFontColor(index)}
                  />
                ))}
              </OptionWrapper>
            </Option>
          </Wrapper>
        </Wrapper>

        <Wrapper gap={2}>
          <SmallText>올해, 나만의 토끼를 꾸며보세요!</SmallText>
          <CustomContainer
            money={money}
            debug={false}
            color={rabbitColorValue}
            accessory={rabbitAccValue}
            isCustom={true}
          />

          <Option>
            <OptionLabel>색상</OptionLabel>
            <OptionWrapper>
              {RABBIT_COLOR_OPTION.map((color, index) => (
                <ColorOption
                  key={index}
                  color={color}
                  onClick={() => setRabbitColor(index)}
                />
              ))}
            </OptionWrapper>
          </Option>
          <Option>
            <OptionLabel>악세서리</OptionLabel>
            <OptionWrapper>
              {ACCESSORY_OPTION.map((icon, index) => (
                <IconOption
                  key={index}
                  src={icon}
                  onClick={() => setRabbitAcc(index)}
                />
              ))}
            </OptionWrapper>
          </Option>

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
  gap: 32px;
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
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;

  > * {
    cursor: pointer;
  }
`

const IconOption = styled.img`
  width: 42px;
  object-fit: cover;
`

const ColorOption = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  background-color: ${({ color }) => color};
  border: 1px solid var(--pink-100);
`

export default Custom
