import styled from 'styled-components'
import React, { useCallback, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import LinkItem from '../components/LinkItem'
import ButtonItem from '../components/ButtonItem'
import { Container } from './Main'

import APP_TITLE from '../utils/AppTitle'
import { login } from '../utils/reducers/loginState'

import axios from 'axios'
import Logo from '../components/Logo'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // 버튼 구현
  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')

  const handleIdChange = e => {
    setUserID(e.target.value)
  }
  const handlePwChange = e => {
    setPassword(e.target.value)
  }

  const attemptLogin = async (userID, password) => {
    try {
      const res = await axios.post('/api/users/login', {
        userID: userID,
        password: password,
      })
      if (res.status === 200) {
        alert('로그인에 성공했습니다.')
        dispatch(login(res.data.result.jwt, res.data.result.url))
        navigate('/')
      }
    } catch (err) {
      const res = err.response
      alert(`로그인에 실패했습니다: ${res.data.result.message}`)
      window.location.reload()
    }
  }

  const handleSubmit = useCallback(
    e => {
      if (!(4 <= userID.length)) {
        alert('아이디는 4자 이상 이어야 합니다.')
      } else if (password.length === 0) {
        alert('비밀번호를 입력해 주세요.')
      } else {
        attemptLogin(userID, password)
      }
    },
    [userID, password]
  )

  const onCheckEnter = e => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Container>
      <Logo />
      <Input
        type="text"
        name="userID"
        placeholder="아이디"
        onChange={handleIdChange}
        onKeyDown={onCheckEnter}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={handlePwChange}
        onKeyDown={onCheckEnter}
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
