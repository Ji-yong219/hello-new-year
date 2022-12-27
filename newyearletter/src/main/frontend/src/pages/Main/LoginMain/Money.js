import PropTypes from 'prop-types'
import styled from 'styled-components'

import FlowerImg from '../../../assets/images/flower.png'

function Money({ isFocus = false, value = 0 }) {
  return (
    <Container>
      <Flower src={FlowerImg} />
      <Content>
        <div>내가 받은 용돈</div>
        <div className={isFocus ? 'bold focus' : 'bold'}>
          {value.toLocaleString()}
        </div>
      </Content>
      <Flower src={FlowerImg} />
    </Container>
  )
}

Money.propTypes = {
  isFocus: PropTypes.bool,
  value: PropTypes.number,
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: max(1.5rem, 27px);
`

const Flower = styled.img`
  width: max(2rem, 36px);
`

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

export default Money
