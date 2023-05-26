import PropTypes from 'prop-types'
import styled from 'styled-components'

function MoneyButton({ src, isActive = true, onClick }) {
  return (
    <Container onClick={onClick}>
      <img
        src={src}
        alt=""
        style={isActive ? null : { filter: 'grayscale(90%)' }}
      />
    </Container>
  )
}

MoneyButton.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

const Container = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
  }
`

export default MoneyButton
