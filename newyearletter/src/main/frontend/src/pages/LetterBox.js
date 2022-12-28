import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import Container from '../components/Container'
import ButtonItem from '../components/ButtonItem'
import MoneyInfo from './Letterbox/MoneyInfo'
import Letter from './Letterbox/Letter'
import styled from 'styled-components'
import { Wrapper } from './Main'
import SmallButtonItem from '../components/SmallButtonItem'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ResponseError } from '../utils/error'
import { logout } from '../utils/reducers/loginState'

// const letterData = [
//   { id: 0, money: 50000, author: '양희범', content: '테스트 메세지입니다1' },
//   { id: 1, money: 10000, author: '박지용', content: '테스트 메세지입니다1' },
//   { id: 2, money: 5000, author: '박수진', content: '테스트 메세지입니다1' },
//   { id: 3, money: 50000, author: '구민구', content: '테스트 메세지입니다1' },
//   { id: 4, money: 1000, author: '이현무', content: '테스트 메세지입니다1' },
//   { id: 5, money: 10000, author: '박지용', content: '테스트 메세지입니다1' },
//   { id: 6, money: 50000, author: '양희범', content: '테스트 메세지입니다1' },
//   { id: 7, money: 10000, author: '박지용', content: '테스트 메세지입니다1' },
//   { id: 8, money: 5000, author: '박수진', content: '테스트 메세지입니다1' },
//   { id: 9, money: 50000, author: '구민구', content: '테스트 메세지입니다1' },
//   { id: 10, money: 50000, author: '양희범', content: '테스트 메세지입니다1' },
//   { id: 11, money: 50000, author: '양희범', content: '테스트 메세지입니다1' },
//   { id: 12, money: 10000, author: '박지용', content: '테스트 메세지입니다1' },
//   { id: 13, money: 5000, author: '박수진', content: '테스트 메세지입니다1' },
//   { id: 14, money: 50000, author: '구민구', content: '테스트 메세지입니다1' },
//   { id: 15, money: 1000, author: '이현무', content: '테스트 메세지입니다1' },
//   { id: 16, money: 10000, author: '박지용', content: '테스트 메세지입니다1' },
//   { id: 17, money: 50000, author: '양희범', content: '테스트 메세지입니다1' },
//   { id: 18, money: 10000, author: '박지용', content: '테스트 메세지입니다1' },
//   { id: 19, money: 5000, author: '박수진', content: '테스트 메세지입니다1' },
//   { id: 20, money: 50000, author: '구민구', content: '테스트 메세지입니다1' },
// ]

const ITEMS_PER_PAGE = 9

function LetterBox() {
  const { uuid, token } = useSelector(state => state.loginState)

  const [letterData, setLetterData] = React.useState([])

  const [page, setPage] = React.useState(0)
  const [isEndPage, setIsEnd] = React.useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetch = useCallback(async () => {
    try {
      const res = await axios.get(
        `/api/letter/${uuid}/getLetter?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      switch (res.status) {
        case 200:
          setLetterData(letterData.concat(res.data.result.content))
          setIsEnd(res.data.result.last)
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
        default:
          alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
      }
    }
  }, [uuid, token, page])

  React.useEffect(() => {
    fetch()
  }, [page])

  return (
    <Container>
      <Wrapper gap={2}>
        <Logo sx={2.5} />

        <MoneyInfo money={125000} />

        <LetterWrapper>
          {letterData.map((item, idx) => (
            <Letter
              key={idx}
              id={item.id}
              money={item.money}
              author={item.author}
              content={item.content}
            />
          ))}
        </LetterWrapper>
        {isEndPage ? null : (
          <SmallButtonItem
            background="--white"
            color="--pink"
            onClick={() => {
              setPage(prev => prev + 1)
            }}
          >
            더보기
          </SmallButtonItem>
        )}
      </Wrapper>
      <ButtonItem onClick={() => navigate('/')}>홈으로</ButtonItem>
    </Container>
  )
}

const LetterWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 36px;
`
export default LetterBox
