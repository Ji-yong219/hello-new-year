import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import FlowerText from '../../../components/FlowerText'

function MoneyInfo({ isFocus = false }) {
  const { money } = useSelector(state => state.infoState)
  return (
    <FlowerText>
      <Content>
        <div>내가 받은 용돈</div>
        <div className={isFocus ? 'bold focus' : 'bold'}>
          {money.toLocaleString()}
        </div>
      </Content>
    </FlowerText>
  )
}

MoneyInfo.propTypes = {
  isFocus: PropTypes.bool,
}
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: max(0.5rem, 9px);

  font-family: nanumRound;
  font-weight: 600;
  font-size: max(0.9rem, 18px);

  .bold {
    font-weight: 800;
    font-size: max(2rem, 32px);
  }

  .focus {
    color: var(--pink);
  }
`

export default MoneyInfo
