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

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: max(0.5rem, 9px);

  width: max(6rem, 100px);
  height: max(2rem, 35px);

  border-radius: 9999px;

  font-family: nanumRound;
  font-weight: bold;
  font-size: max(0.7rem, 12px);

  background: var(${props => props.background});
  color: var(${({ color }) => color});

  cursor: pointer;
`

export default SmallButtonItem
