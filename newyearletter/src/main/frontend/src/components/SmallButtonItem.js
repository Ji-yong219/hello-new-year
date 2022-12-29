import styled from 'styled-components'
import PropTypes from 'prop-types'

function SmallButtonItem({
  background = '--pink-300',
  color = '--white',
  onClick,
  children,
}) {
  return (
    <Container background={background} color={color} onClick={onClick}>
      {children}
    </Container>
  )
}

SmallButtonItem.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

const Container = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  width: 120px;
  height: 40px;

  border: 1px solid var(${({ color }) => color});
  border-radius: 9999px;

  font-family: nanumRound;
  font-weight: bold;
  font-size: 14px;

  background: var(${props => props.background});
  color: var(${({ color }) => color});

  cursor: pointer;
`

export default SmallButtonItem
