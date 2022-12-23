import React, { useCallback, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import LinkItem from '../components/LinkItem'
import ButtonItem from '../components/ButtonItem'
import { AppTitle, Container } from './Main'

import APP_TITLE from '../utils/AppTitle'
import { BottomText, Input } from './Login'
import { useDispatch } from 'react-redux'
import { login } from '../utils/reducers/loginState'

function CreateAccount() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const dispath = useDispatch()
  useEffect(() => {
    // axios.get('/api/getAppTitle')
    // .then(response => setAppTitle(response.data))
    // .catch(error => console.log(error))
  }, [])

  const handleIdChange = e => {
    setEmail(e.target.value)
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
      } else if (!(8 <= password.length && password.length <= 12)) {
        alert('비밀번호는 8자 이상 20자 이하여야 합니다.')
      } else if (password !== passwordRepeat) {
        alert('입력하신 두 비밀번호가 다릅니다.')
      } else {
        dispath(login())
        navigate('/')
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

      <BottomText>
        <LinkItem target="/sign-up">계정 생성하기</LinkItem>
      </BottomText>
    </Container>
  )
}

export default CreateAccount
