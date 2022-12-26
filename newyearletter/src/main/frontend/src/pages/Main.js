import React from 'react'

import styled from 'styled-components'

import ButtonItem from '../components/ButtonItem'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../utils/reducers/loginState'

import background from '../assets/images/background.png'
import Logo from '../components/Logo'

function Main() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { isLogin } = useSelector(state => state.loginState)

  return (
    <Container>
      <Wrapper gap={2}>
        <Logo />
        <SubTitle>새해 멘트를 공유하고 응원의 편지를 받으세요!</SubTitle>
      </Wrapper>
      <Wrapper>
        <ButtonItem
          onClick={
            isLogin
              ? () => {
                  dispatch(logout())
                }
              : () => {
                  navigate('/login')
                }
          }
        >
          {isLogin ? '로그아웃' : '로그인'}
        </ButtonItem>

        <ButtonItem
          background="--pink-100"
          onClick={
            isLogin
              ? null
              : () => {
                  navigate('/sign-up')
                }
          }
          isActive={!isLogin}
        >
          회원가입
        </ButtonItem>
      </Wrapper>
    </Container>
  )
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: max(3rem, 54px) 0;

  align-items: center;
  gap: max(2rem, 36px);

  background: url(${background});
  background-size: cover;

  color: var(--brown);

  @media (max-height: 560px) {
    height: auto;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: max(${({ gap = 1 }) => gap}rem, ${({ gap = 1 }) => gap * 18}px);
`

export const SubTitle = styled.div`
  font-family: nanumRound;
  font-weight: bold;
  font-size: max(1.2rem, 17px);

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

export default Main
