import styled from 'styled-components'
import React, { useCallback, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import LinkItem from '../components/LinkItem'
import ButtonItem from '../components/ButtonItem'
import { AppTitle, Container } from './Main'

import APP_TITLE from '../utils/AppTitle'
import { login } from '../utils/reducers/loginState'

import axios from 'axios'

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
      const res = axios.post('/api/users/login', {
        userID: userID,
        password: password,
      })

      const code = res.data.status
      if (code === 200) {
        alert('로그인 성공')
        dispatch(login())
        navigate('/')
      } else {
        alert(`로그인 실패: ${res.message}`)
      }
    } catch (error) {
      alert('예상치 못한 에러가 발생했습니다. 다시 시도해주세요.')
      window.location.reload()
    }
  }

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()

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

  return (
    <Container>
      <AppTitle onClick={() => navigate('/')}>{APP_TITLE}</AppTitle>
      <Input
        type="text"
        name="userID"
        placeholder="아이디"
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
