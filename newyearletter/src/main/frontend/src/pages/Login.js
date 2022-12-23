import styled from 'styled-components'
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import LinkItem from '../components/LinkItem'
import ButtonItem from '../components/ButtonItem'
import { AppTitle, Container } from './Main'

import APP_TITLE from '../utils/AppTitle'
import { login } from '../utils/reducers/loginState'

function Login() {
  const navigate = useNavigate()
  const dispath = useDispatch()

  // 버튼 구현
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleIdChange = e => {
    setEmail(e.target.value)
  }
  const handlePwChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = useCallback(
    e => {
      console.log(password)
      if (email.indexOf('@') === -1) {
        alert('이메일 형식이 맞지 않습니다.')
      } else if (password.length === 0) {
        alert('비밀번호를 입력해 주세요.')
      } else {
        dispath(login())
        navigate('/')
      }
    },
    [email, password]
  )

  return (
    <Container>
      <AppTitle onClick={() => navigate('/')}>{APP_TITLE}</AppTitle>
      <Input
        type="text"
        name="email"
        placeholder="닉네임"
        onChange={handleIdChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={handlePwChange}
      />

      <ButtonItem onClick={handleSubmit}>로그인</ButtonItem>

      <BottomText>
        <LinkItem target="/sign-up">계정 생성하기</LinkItem>
      </BottomText>
    </Container>
  )
}

export const Input = styled.input`
  font-family: score;
  font-weight: 300;
  font-size: max(1.5rem, 21px);

  width: max(20rem, 240px);
  height: max(4rem, 60px);

  padding: max(1rem, 18px);
`

export const BottomText = styled.div`
  font-family: score;
  font-weight: 300;
  font-size: max(1rem, 18px);
`

export default Login
