import React from 'react'

import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

import LogoutMain from './Main/LogoutMain'
import LoginMain from './Main/LoginMain'

function Main() {
  const { isLogin } = useSelector(state => state.loginState)

  return isLogin ? <LoginMain /> : <LogoutMain />
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: max(${({ gap = 1 }) => gap}rem, ${({ gap = 1 }) => gap * 18}px);
`

export const SubTitle = styled.div`
  font-family: nanumRound;
  font-weight: bold;
  font-size: max(1.2rem, 17px);

  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`

export const Contour = styled.div`
  width: 100%;
  height: 2px;

  background: var(--brown-100);
`
export default Main
