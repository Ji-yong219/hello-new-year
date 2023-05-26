import styled from 'styled-components'
import MoneyButton from '../../components/MoneyButton'

import Money50000 from '../../assets/images/money-50000.png'
import Money10000 from '../../assets/images/money-10000.png'
import Money5000 from '../../assets/images/money-5000.png'
import Money1000 from '../../assets/images/money-1000.png'
import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

function Letter({ id, money, author, content }) {
  const MONEY_ASSETS = {
    50000: Money50000,
    10000: Money10000,
    5000: Money5000,
    1000: Money1000,
  }

  const navigate = useNavigate()

  return (
    <Container
      onClick={() => {
        navigate(`${id}/`)
      }}
    >
      <MoneyButton src={MONEY_ASSETS[money]} />
      <Label>{author}</Label>
    </Container>
  )
}

Letter.propTypes = {
  id: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

const Container = styled.div`
  position: relative;
  max-width: min(20rem, 120px);
  display: flex;
  flex-direction: column;
  gap: 8px;

  cursor: pointer;
`

const Label = styled.div`
  max-width: 100%;
  padding: 6px;

  font-family: nanumRound;
  font-weight: 800;
  font-size: 14px;
  color: var(--brown);

  background: white;
  border-radius: 9999px;
  text-align: center;
  border: 1px solid var(--pink-100);

  overflow: hidden;
  text-overflow: ellipsis;
`

export default Letter
