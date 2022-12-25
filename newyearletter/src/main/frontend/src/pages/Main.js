import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import APP_TITLE from '../utils/AppTitle'

import ButtonItem from '../components/ButtonItem'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../utils/reducers/loginState'

function Main() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { isLogin } = useSelector(state => state.loginState)

  return (
    <Container>
      <AppTitle>{APP_TITLE}</AppTitle>

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

      <ButtonItem
        onClick={() => {
          navigate('/mail-box')
        }}
      >
        우체통
      </ButtonItem>

      <ButtonItem
        onClick={() => {
          navigate('/receive-mail')
        }}
      >
        받은 편지 확인하기
      </ButtonItem>
    </Container>
  )
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: max(2rem, 36px);

  @media (max-height: 560px) {
    height: auto;
  }
`

export const AppTitle = styled.div`
  font-family: 'score';
  font-weight: 600;
  font-size: max(2.5rem, 36px);
  cursor: pointer;
`

export default Main
