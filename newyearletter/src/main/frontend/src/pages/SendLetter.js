import Container from '../components/Container'
import Logo from '../components/Logo'
import React from 'react'
import { useLocation } from 'react-router-dom'
import SendContent from './SendLetter/SendContent'
import SendComplete from './SendLetter/SendComplete'

function SendLetter() {
  const [money, setMoney] = React.useState(MONEY_INIT_STATE)
  const [isSended, setSend] = React.useState(false)

  const { state } = useLocation()

  const selectMoney = moneyAmount => {
    var copy = Object.assign({}, MONEY_INIT_STATE)
    copy[moneyAmount] = true
    setMoney(copy)
  }

  const attemptSend = React.useCallback((sender, content, money) => {}, [])

  return (
    <Container>
      {isSended ? (
        <SendComplete />
      ) : (
        <SendContent
          nickName={state}
          money={money}
          selectMoney={selectMoney}
          setSend={setSend}
        />
      )}
    </Container>
  )
}

export const MONEY_INIT_STATE = {
  50000: false,
  10000: false,
  5000: false,
  1000: false,
}

export default SendLetter
