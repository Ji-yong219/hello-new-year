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
import setMetaTags from '../utils/meta'
import { SITE_NAME } from '../utils/constant'

function LetterBox() {
  React.useEffect(() => {
    setMetaTags(`받은 편지함 - ${SITE_NAME}`)
  }, [])

  const { uuid, token } = useSelector(state => state.loginState)

  const [letterData, setLetterData] = React.useState([])

  const [page, setPage] = React.useState(0)
  const [totalPages, setTotalPage] = React.useState(0)
  const [isEndPage, setIsEnd] = React.useState(true)

  const ITEMS_PER_PAGE = 9

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const fetch = useCallback(async () => {
    try {
      const res = await axios.get(`/api/letter/${uuid}/getLetter`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(res)
      switch (res.status) {
        case 200:
          setLetterData(res.data.result)
          setIsEnd(res.data.result.length <= ITEMS_PER_PAGE ? true : false)
          setTotalPage(Math.ceil(res.data.result.length / ITEMS_PER_PAGE))
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
          alert('받은 편지가 없습니다.')
          navigate('/')
          break
        default:
          alert('서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.')
      }
    }
  }, [uuid, token, page])

  // const fetch = () => {
  //   const res = {
  //     data: {
  //       result: [
  //         {
  //           id: 42,
  //           author: '지용',
  //           content: '쿠팡걸 수진',
  //           money: 50000,
  //         },
  //         {
  //           id: 47,
  //           author: '9m9',
  //           content: '고생했다 백엔드',
  //           money: 50000,
  //         },
  //         {
  //           id: 49,
  //           author: 'You',
  //           content: '알고리즘 스터디 열심히 하자 ^^',
  //           money: 50000,
  //         },
  //         {
  //           id: 50,
  //           author: 'Hello',
  //           content: 'World',
  //           money: 50000,
  //         },
  //         {
  //           id: 379,
  //           author: 'ㅇㅇ',
  //           content:
  //             '이름에 이쁘니 붙이는거 딱밤 개마렵내요\n취뽀 같이 힘내보시졍',
  //           money: 1000,
  //         },
  //         {
  //           id: 42,
  //           author: '지용',
  //           content: '쿠팡걸 수진',
  //           money: 50000,
  //         },
  //         {
  //           id: 47,
  //           author: '9m9',
  //           content: '고생했다 백엔드',
  //           money: 50000,
  //         },
  //         {
  //           id: 49,
  //           author: 'You',
  //           content: '알고리즘 스터디 열심히 하자 ^^',
  //           money: 50000,
  //         },
  //         {
  //           id: 50,
  //           author: 'Hello',
  //           content: 'World',
  //           money: 50000,
  //         },
  //         {
  //           id: 379,
  //           author: 'ㅇㅇ',
  //           content:
  //             '이름에 이쁘니 붙이는거 딱밤 개마렵내요\n취뽀 같이 힘내보시졍',
  //           money: 1000,
  //         },
  //         {
  //           id: 42,
  //           author: '지용',
  //           content: '쿠팡걸 수진',
  //           money: 50000,
  //         },
  //         {
  //           id: 47,
  //           author: '9m9',
  //           content: '고생했다 백엔드',
  //           money: 50000,
  //         },
  //         {
  //           id: 49,
  //           author: 'You',
  //           content: '알고리즘 스터디 열심히 하자 ^^',
  //           money: 50000,
  //         },
  //         {
  //           id: 50,
  //           author: 'Hello',
  //           content: 'World',
  //           money: 50000,
  //         },
  //         {
  //           id: 379,
  //           author: 'ㅇㅇ',
  //           content:
  //             '이름에 이쁘니 붙이는거 딱밤 개마렵내요\n취뽀 같이 힘내보시졍',
  //           money: 1000,
  //         },
  //         {
  //           id: 42,
  //           author: '지용',
  //           content: '쿠팡걸 수진',
  //           money: 50000,
  //         },
  //         {
  //           id: 47,
  //           author: '9m9',
  //           content: '고생했다 백엔드',
  //           money: 50000,
  //         },
  //         {
  //           id: 49,
  //           author: 'You',
  //           content: '알고리즘 스터디 열심히 하자 ^^',
  //           money: 50000,
  //         },
  //         {
  //           id: 50,
  //           author: 'Hello',
  //           content: 'World',
  //           money: 50000,
  //         },
  //         {
  //           id: 379,
  //           author: 'ㅇㅇ',
  //           content:
  //             '이름에 이쁘니 붙이는거 딱밤 개마렵내요\n취뽀 같이 힘내보시졍',
  //           money: 1000,
  //         },
  //         {
  //           id: 42,
  //           author: '지용',
  //           content: '쿠팡걸 수진',
  //           money: 50000,
  //         },
  //         {
  //           id: 47,
  //           author: '9m9',
  //           content: '고생했다 백엔드',
  //           money: 50000,
  //         },
  //         {
  //           id: 49,
  //           author: 'You',
  //           content: '알고리즘 스터디 열심히 하자 ^^',
  //           money: 50000,
  //         },
  //         {
  //           id: 50,
  //           author: 'Hello',
  //           content: 'World',
  //           money: 50000,
  //         },
  //         {
  //           id: 379,
  //           author: 'ㅇㅇ',
  //           content:
  //             '이름에 이쁘니 붙이는거 딱밤 개마렵내요\n취뽀 같이 힘내보시졍',
  //           money: 1000,
  //         },
  //         {
  //           id: 42,
  //           author: '지용',
  //           content: '쿠팡걸 수진',
  //           money: 50000,
  //         },
  //         {
  //           id: 47,
  //           author: '9m9',
  //           content: '고생했다 백엔드',
  //           money: 50000,
  //         },
  //         {
  //           id: 49,
  //           author: 'You',
  //           content: '알고리즘 스터디 열심히 하자 ^^',
  //           money: 50000,
  //         },
  //         {
  //           id: 50,
  //           author: 'Hello',
  //           content: 'World',
  //           money: 50000,
  //         },
  //         {
  //           id: 379,
  //           author: 'ㅇㅇ',
  //           content:
  //             '이름에 이쁘니 붙이는거 딱밤 개마렵내요\n취뽀 같이 힘내보시졍',
  //           money: 1000,
  //         },
  //       ],
  //     },
  //   }

  //   setLetterData(res.data.result)
  //   setIsEnd(res.data.result.length <= ITEMS_PER_PAGE ? true : false)
  //   setTotalPage(Math.ceil(res.data.result.length / ITEMS_PER_PAGE))
  // }

  const toNextPage = () => {
    setPage(prev => prev + 1)
    if (page + 2 == totalPages) {
      setIsEnd(true)
    }
  }

  React.useEffect(() => {
    fetch()
  }, [])
  console.log(letterData)
  return (
    <Container>
      <Wrapper gap={2}>
        <Logo sx={1.75} />

        <MoneyInfo />

        <LetterWrapper>
          {letterData
            .slice(0, ITEMS_PER_PAGE * page + ITEMS_PER_PAGE)
            .map((item, idx) => {
              return (
                <Letter
                  key={idx}
                  id={item.id}
                  money={item.money}
                  author={item.author}
                  content={item.content}
                />
              )
            })}
        </LetterWrapper>
        {isEndPage ? null : (
          <SmallButtonItem
            background="--white"
            color="--pink"
            onClick={() => toNextPage()}
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
