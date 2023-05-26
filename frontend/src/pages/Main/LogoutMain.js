import { useNavigate } from 'react-router'
import styled from 'styled-components'
import ButtonItem from '../../components/ButtonItem'
import Container from '../../components/Container'
import Logo from '../../components/Logo'
import { SubTitle, Wrapper } from '../Main'
import Rabbit from '../../assets/images/main.png'
import React from 'react'
import { Copyright } from './LoginMain'

function LogoutMain() {
  const navigate = useNavigate()

  return (
    <Container>
      <Wrapper gap={2}>
        <Logo />
        <SubTitle>2023년, 흑토끼의 묘한 편지함을 찾아오세요</SubTitle>
      </Wrapper>
      <Wrapper gap={4}>
        <RabbitContainer src={Rabbit} />
        <Wrapper gap={1.5}>
          <Wrapper>
            <ButtonItem onClick={() => navigate('/login')}>로그인</ButtonItem>
            <ButtonItem
              background="--pink-100"
              onClick={() => navigate('/sign-up')}
            >
              회원가입
            </ButtonItem>
          </Wrapper>
          <Copyright>
            Copyright 2022. 구민구 박지용 양희범 박수진 이현무 김보영 이유진
            김수아 all rights reserved. contact: corleone@kakao.com
          </Copyright>
        </Wrapper>
      </Wrapper>
    </Container>
  )
}

const RabbitContainer = styled.img`
  width: 70%;
  object-fit: cover;
`

export default LogoutMain
