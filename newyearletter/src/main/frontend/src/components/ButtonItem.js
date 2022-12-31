import styled from 'styled-components'
import PropTypes from 'prop-types'

function ButtonItem({ background = '--pink-200', onClick, children }) {
  return (
    <Container background={background} onClick={onClick}>
      {children}
    </Container>
  )
}

ButtonItem.propTypes = {
  background: PropTypes.string,
  onClick: PropTypes.func,
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: 60px;

  border: 5px double var(--light-100);
  border-radius: 9999px;

  font-family: nanumRound;
  font-weight: bold;
  font-size: 18px;

  background: var(${props => props.background});
  color: var(--brown);

  cursor: pointer;
`

export default ButtonItem
