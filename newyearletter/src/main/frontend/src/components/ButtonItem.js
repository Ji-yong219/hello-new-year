import styled from 'styled-components'
import PropTypes from 'prop-types'

function ButtonItem({ isActive = true, onClick, children }) {
  return (
    <Container
      style={
        isActive
          ? null
          : { background: 'var(--light-700)', cursor: 'not-allowed' }
      }
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

ButtonItem.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: max(20rem, 240px);
  height: max(4rem, 80px);

  font-family: score;
  font-weight: 500;
  font-size: max(1.5rem, 21px);

  background: var(--primary);
  color: white;

  cursor: pointer;
`

export default ButtonItem
