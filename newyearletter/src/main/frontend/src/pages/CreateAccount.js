import React, { useCallback, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import LinkItem from '../components/LinkItem'
import ButtonItem from '../components/ButtonItem'
import { AppTitle, Container } from './Main'

import APP_TITLE from '../utils/AppTitle'
import { BottomText, Input } from './Login'
import { useDispatch } from 'react-redux'
import { login } from '../utils/reducers/loginState'

import axios from 'axios'
import { API_ADDRESS } from '../utils/constant'
import Logo from '../components/Logo'

function CreateAccount() {
  const navigate = useNavigate()
  const [userID, setUserID] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const dispatch = useDispatch()

  const handleIdChange = e => {
    setUserID(e.target.value)
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

  const attemptJoin = async (userID, password, nickName) => {
    try {
      const res = await axios.post('/api/users/join', {
        userID: userID,
        password: password,
        nickName: nickName,
      })

      const code = res.status
      if (code === 200) {
        alert('회원가입 성공')
        dispatch(login())
        navigate('/')
      } else {
        alert(`회원가입에 실패했습니다: ${res.result.message}`)
        window.location.reload()
      }
    } catch (err) {
      const res = err.response
      alert(`회원가입에 실패했습니다: ${res.data.result.message}`)
      window.location.reload()
    }
  }

  const handleSubmit = useCallback(
    e => {
      if (!(4 <= userID.length)) {
        alert('아이디는 4자 이상 이어야 합니다.')
      } else if (!(2 <= nickname.length)) {
        alert('닉네임은 2자 이상 이어야 합니다.')
      } else if (!(4 <= password.length && password.length <= 20)) {
        alert('비밀번호는 4자 이상 20자 이하여야 합니다.')
      } else if (password !== passwordRepeat) {
        alert('입력하신 두 비밀번호가 다릅니다.')
      } else {
        attemptJoin(userID, password, nickname)
      }
    },
    [userID, password, passwordRepeat, nickname]
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
        type="text"
        name="nickname"
        placeholder="닉네임"
        onChange={handleNicknameChange}
        onKeyDown={onCheckEnter}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={handlePwChange}
        onKeyDown={onCheckEnter}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호 확인"
        onChange={handlePwReChange}
        onKeyDown={onCheckEnter}
      />

      <ButtonItem onClick={handleSubmit}>회원가입</ButtonItem>
    </Container>
  )
}

export default CreateAccount
