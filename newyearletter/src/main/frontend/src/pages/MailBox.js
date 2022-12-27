import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logo from '../components/Logo'
import Container from '../components/Container'

function MailBox() {
  const [mailboxTitle, setMailboxTitle] = useState('')

  useEffect(() => {
    axios
      .get('/api/getMailboxTitle')
      .then(response => setMailboxTitle(response.data))
      .catch(error => console.log(error))
  }, [])

  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/')
  }

  let [active, setActive] = useState(false)

  return (
    <Container>
      <Logo />
      <button
        type="button"
        // onClick={goToLogin}
        name=""
        className="mailBoxBtn"
      >
        {mailboxTitle}
      </button>
    </Container>
  )
}

export default MailBox
