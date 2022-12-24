import React, { useCallback, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import LinkItem from '../components/LinkItem'
import ButtonItem from '../components/ButtonItem'
import { AppTitle, Container } from './Main'

import APP_TITLE from '../utils/AppTitle'
import { BottomText, Input } from './Login'
import { useDispatch } from 'react-redux'
import { login } from '../utils/reducers/loginState'

import axios from 'axios';

function CreateAccount() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const dispatch = useDispatch()

  const handleIdChange = e => {
    setEmail(e.target.value)
  }
  const handleNicknameChange = e => {
    setNickname(e.target.value)
  }
  const handlePwChange = e => {
    setPassword(e.target.value)
  }

  const handlePwReChange = e => {
    setPasswordRepeat(e.target.value)
  }

  const handleSubmit = useCallback(
    e => {
      if (email.indexOf('@') === -1) {
        alert('이메일 형식이 맞지 않습니다.')
      } else if (!(4 <= nickname.length)) {
        alert('닉네임은 4자 이상 이어야 합니다.')
      } else if (!(8 <= password.length && password.length <= 12)) {
        alert('비밀번호는 8자 이상 20자 이하여야 합니다.')
      } else if (password !== passwordRepeat) {
        alert('입력하신 두 비밀번호가 다릅니다.')
      } else {
        let body = {
          email: email,
          password: password,
          nickname: nickname
        }

        axios.post('/api/users/join', body)
        .then(res => {
          console.log(`res : ${res}`)
          const code = res.data.status;
          if (code === 400) {
            alert("???")
          } else if (code === 409) {
            alert(`회원가입 실패: ${res.message}`)
          } else {
            alert("회원가입 성공")
            dispatch(login())
            navigate('/')
          }
        })
      }
    },
    [email, password, passwordRepeat]
  )

  return (
    <Container>
      <AppTitle onClick={() => navigate('/')}>{APP_TITLE}</AppTitle>
      <Input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={handleIdChange}
      />
      <Input
        type="text"
        name="nickname"
        placeholder="닉네임"
        onChange={handleNicknameChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={handlePwChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호 확인"
        onChange={handlePwReChange}
      />

      <ButtonItem onClick={handleSubmit}>회원가입</ButtonItem>
    </Container>
  )
}

export default CreateAccount
