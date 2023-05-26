import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FlowerText from '../../components/FlowerText'

function MoneyInfo() {
  const { money } = useSelector(state => state.infoState)
  return (
    <FlowerText>
      <Content>
        총 <span className="bold">{money.toLocaleString()}</span> 원을 받았어요!
      </Content>
    </FlowerText>
  )
}

MoneyInfo.propTypes = {
  money: PropTypes.number,
}

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-family: nanumRound;
  font-weight: 600;
  font-size: 16px;

  .bold {
    font-weight: 800;
    color: var(--pink);
    font-size: 28px;
  }

  white-space: nowrap;
`

export default MoneyInfo
