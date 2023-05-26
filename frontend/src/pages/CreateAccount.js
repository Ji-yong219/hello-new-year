import React, { useCallback, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import ButtonItem from '../components/ButtonItem'
import { SubTitle, Wrapper } from './Main'

import { BottomText, Input } from './Login'
import { useDispatch } from 'react-redux'
import { login } from '../utils/reducers/loginState'

import axios from 'axios'
import Logo from '../components/Logo'
import LinkItem from '../components/LinkItem'
import Container from '../components/Container'
import { ResponseError } from '../utils/error'
import setMetaTags from '../utils/meta'
import { SITE_NAME } from '../utils/constant'

function CreateAccount() {
  React.useEffect(() => {
    setMetaTags(`회원가입 - ${SITE_NAME}`)
  }, [])
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

  const attemptLogin = async (userID, password) => {
    try {
      const res = await axios.post('/api/users/login', {
        userID: userID,
        password: password,
      })

      switch (res.status) {
        case 200:
          dispatch(login(res.data.result.jwt, res.data.result.uuid))
          return
        default:
          throw new ResponseError('잘못된 응답입니다.', res)
      }
    } catch (err) {
      const res = err.response
      switch (res.status) {
        case 401:
        case 404:
          alert(`로그인에 실패했습니다: ${res.data.result.message}`)
          window.location.reload()
          break
        default:
          alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
          navigate('/')
      }
    }
  }

  const attemptJoin = React.useCallback(
    async (userID, password, nickName) => {
      try {
        const res = await axios.post('/api/users/join', {
          userID: userID,
          password: password,
          nickName: nickName,
        })

        const code = res.status
        if (code === 200) {
          alert('회원가입 성공')
          attemptLogin(userID, password)
          navigate('/', { state: { isFirst: true } })
        } else {
          throw new ResponseError('잘못된 응답입니다.', res)
        }
      } catch (err) {
        const res = err.response

        if (res.status === 409) {
          alert(`회원가입에 실패했습니다: ${res.data.result.message}`)
          window.location.reload()
        } else {
          alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
          navigate('/')
        }
      }
    },
    [dispatch, navigate]
  )

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
    [userID, password, passwordRepeat, nickname, attemptJoin]
  )

  const onCheckEnter = e => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  return (
    <Container>
      <Wrapper gap={3}>
        <Logo />
        <Wrapper gap={1.2}>
          <SubTitle>환영합니다!</SubTitle>
          <Input
            type="text"
            name="userID"
            placeholder="아이디"
            autocomplete="off"
            onChange={handleIdChange}
            onKeyDown={onCheckEnter}
          />
          <Input
            type="text"
            name="nickname"
            placeholder="닉네임"
            autocomplete="off"
            onChange={handleNicknameChange}
            onKeyDown={onCheckEnter}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            autocomplete="off"
            onChange={handlePwChange}
            onKeyDown={onCheckEnter}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호 확인"
            autocomplete="off"
            onChange={handlePwReChange}
            onKeyDown={onCheckEnter}
          />
        </Wrapper>
        <Wrapper>
          <ButtonItem onClick={handleSubmit}>회원가입</ButtonItem>
          <LinkItem target="/login">
            <BottomText>계정이 있으신가요? 로그인</BottomText>
          </LinkItem>
        </Wrapper>
      </Wrapper>
    </Container>
  )
}

export default CreateAccount
