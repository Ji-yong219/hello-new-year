import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Logo from '../components/Logo'
import Container from '../components/Container'
import ButtonItem from '../components/ButtonItem'
import LetterInfoLabel from './LetterDetail/FromLabel'
import Letter from '../components/Letter'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ResponseError } from '../utils/error'
import { logout } from '../utils/reducers/loginState'
import setMetaTags from '../utils/meta'
import { SITE_NAME } from '../utils/constant'

function ReadLetter() {
  const { id } = useParams()

  const [author, setAuthor] = React.useState('')
  const [content, setContent] = React.useState('')
  const [money, setMoney] = React.useState(50000)

  React.useEffect(() => {
    setMetaTags(`${author}님의 편지 - ${SITE_NAME}`)
  }, [author])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { uuid, token } = useSelector(state => state.loginState)

  const fetch = React.useCallback(async () => {
    try {
      const res = await axios.get(`/api/letter/${uuid}/getLetter/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      switch (res.status) {
        case 200:
          setAuthor(res.data.result.author)
          setContent(res.data.result.content)
          setMoney(res.data.result.money)
          break
        default:
          throw new ResponseError('잘못된 응답입니다.', res)
      }
    } catch (err) {
      const res = err.response

      switch (res.status) {
        case 401:
          alert('세션이 만료되었습니다. 다시 로그인해주세요.')
          dispatch(logout())
          navigate('/login')
          break
        case 404:
          alert(`${res.data.result.message}`)
          navigate('/')
          break
        default:
          alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
      }
    }
  }, [uuid, token])

  React.useEffect(() => {
    fetch()
  }, [])

  // const [data, setData] = React.useState(INFO_INIT_STATE)
  return (
    <Container>
      <Logo sx={1.75} />
      <LetterInfoLabel author={author} money={money} />
      <Letter defaultText={content} />
      <ButtonItem onClick={() => navigate('/letter-box')}>뒤로가기</ButtonItem>
    </Container>
  )
}

export default ReadLetter
