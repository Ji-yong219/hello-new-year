import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Container from '../components/Container'
import ButtonItem from '../components/ButtonItem'

function LetterBox() {
  React.useEffect(() => {}, [])

  const navigate = useNavigate()

  return (
    <Container>
      <Logo />
      <ButtonItem onClick={() => navigate('/')}>홈으로</ButtonItem>
    </Container>
  )
}

export default LetterBox
