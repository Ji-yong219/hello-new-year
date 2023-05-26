import Container from '../components/Container'
import Logo from '../components/Logo'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import SendContent from './SendLetter/SendContent'
import SendComplete from './SendLetter/SendComplete'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ResponseError } from '../utils/error'
import setMetaTags from '../utils/meta'
import { SITE_NAME } from '../utils/constant'
import { freeLoading, setLoading } from '../utils/reducers/loadingState'

function SendLetter() {
  const [money, setMoney] = React.useState(MONEY_INIT_STATE)
  const [isSended, setSend] = React.useState(false)

  const [author, setAuthor] = React.useState('')
  const [content, setContent] = React.useState('')

  const { state } = useLocation()
  const { uuid } = useParams()
  const dispatch = useDispatch()

  const selectMoney = moneyAmount => {
    var copy = Object.assign({}, MONEY_INIT_STATE)
    copy[moneyAmount] = true
    setMoney(copy)
  }

  React.useEffect(() => {
    setMetaTags(`${state}님에게 편지쓰기 - ${SITE_NAME}`)
  }, [])

  const getSelectedMoney = () => {
    return Object.keys(money).find(key => money[key] === true)
  }

  const attemptSend = React.useCallback(async () => {
    const selectedMoney = getSelectedMoney()
    if (selectedMoney === undefined) {
      alert('용돈을 선택해주세요.')
    } else if (author.length === 0) {
      alert('보내시는 분의 이름을 적어주세요.')
    } else if (content.length < 5) {
      alert('내용을 적어도 5자 이상 써주세요.')
    } else if (content.length > 100) {
      alert('편지는 최대 100자까지 쓸 수 있습니다.')
    } else {
      try {
        dispatch(setLoading())
        const res = await axios.post(`/api/letter/${uuid}`, {
          author: author,
          content: content,
          money: selectedMoney,
        })
        dispatch(freeLoading())

        switch (res.status) {
          case 200:
            setSend(true)
            break
          default:
            throw new ResponseError('잘못된 응답입니다.', res)
        }
      } catch (err) {
        dispatch(freeLoading())
        const res = err.ResponseError
        switch (res.status) {
          default:
            alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
        }
      }
    }
  }, [author, content, uuid, getSelectedMoney])

  return (
    <Container>
      {isSended ? (
        <SendComplete />
      ) : (
        <SendContent
          nickName={state}
          money={money}
          selectMoney={selectMoney}
          setContent={setContent}
          setAuthor={setAuthor}
          onClick={attemptSend}
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
