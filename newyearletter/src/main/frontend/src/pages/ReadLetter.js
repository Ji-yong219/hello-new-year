import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Logo from '../components/Logo'
import Container from '../components/Container'
import ButtonItem from '../components/ButtonItem'
import LetterInfoLabel from './LetterDetail/FromLabel'
import Letter from '../components/Letter'

const letterInfo = [
  { id: 0, money: 50000, sender: '양희범', content: '테스트 메세지입니다1' },
  { id: 1, money: 10000, sender: '박지용', content: '테스트 메세지입니다1' },
  { id: 2, money: 5000, sender: '박수진', content: '테스트 메세지입니다1' },
  { id: 3, money: 50000, sender: '구민구', content: '테스트 메세지입니다1' },
  { id: 4, money: 1000, sender: '이현무', content: '테스트 메세지입니다1' },
  { id: 5, money: 10000, sender: '박지용', content: '테스트 메세지입니다1' },
  { id: 6, money: 50000, sender: '양희범', content: '테스트 메세지입니다1' },
  { id: 7, money: 10000, sender: '박지용', content: '테스트 메세지입니다1' },
  { id: 8, money: 5000, sender: '박수진', content: '테스트 메세지입니다1' },
  { id: 9, money: 50000, sender: '구민구', content: '테스트 메세지입니다1' },
  { id: 10, money: 50000, sender: '양희범', content: '테스트 메세지입니다1' },
  { id: 11, money: 50000, sender: '양희범', content: '테스트 메세지입니다1' },
  { id: 12, money: 10000, sender: '박지용', content: '테스트 메세지입니다1' },
  { id: 13, money: 5000, sender: '박수진', content: '테스트 메세지입니다1' },
  { id: 14, money: 50000, sender: '구민구', content: '테스트 메세지입니다1' },
  { id: 15, money: 1000, sender: '이현무', content: '테스트 메세지입니다1' },
  { id: 16, money: 10000, sender: '박지용', content: '테스트 메세지입니다1' },
  { id: 17, money: 50000, sender: '양희범', content: '테스트 메세지입니다1' },
  { id: 18, money: 10000, sender: '박지용', content: '테스트 메세지입니다1' },
  { id: 19, money: 5000, sender: '박수진', content: '테스트 메세지입니다1' },
  { id: 20, money: 50000, sender: '구민구', content: '테스트 메세지입니다1' },
]

const INFO_INIT_STATE = {
  money: 0,
  sender: '',
  content: '',
}

function ReadLetter() {
  const navigate = useNavigate()

  const { id } = useParams()

  // const [data, setData] = React.useState(INFO_INIT_STATE)
  const data = letterInfo[id]
  return (
    <Container>
      <Logo sx={2.5} />
      <LetterInfoLabel sender={data.sender} money={data.money} />
      <Letter defaultText={data.content} />
      <ButtonItem onClick={() => navigate('/letter-box')}>뒤로가기</ButtonItem>
    </Container>
  )
}

export default ReadLetter
