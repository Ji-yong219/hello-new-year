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

const letterData = [
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

const ITEMS_PER_PAGE = 9

function LetterBox() {
  const [page, setPage] = React.useState(0)
  const [totalPages, setTotalPages] = React.useState(
    Math.floor(letterData.length / ITEMS_PER_PAGE)
  )
  const [isEndPage, setIsEnd] = React.useState(page === totalPages)

  const navigate = useNavigate()

  const getMoreItems = useCallback(async () => {
    setPage(prev => prev + 1)
    if (page + 1 === totalPages) {
      setIsEnd(true)
    }
  }, [page, totalPages])

  return (
    <Container>
      <Logo sx={2.5} />
      <Wrapper gap={2}>
        <MoneyInfo money={125000} />

        <LetterWrapper>
          {letterData
            .slice(0, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
            .map((item, idx) => (
              <Letter
                key={idx}
                id={item.id}
                money={item.money}
                sender={item.sender}
                content={item.content}
              />
            ))}
        </LetterWrapper>
        {isEndPage ? null : (
          <SmallButtonItem
            background="--white"
            color="--pink"
            onClick={() => getMoreItems()}
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 36px;
`
export default LetterBox
