import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SubTitle } from '../pages/Main'

function LinkItem({ target = '', style, children }) {
  return (
    <StyledLink to={target} style={style}>
      {children}
    </StyledLink>
  )
}

LinkItem.propTypes = {
  target: PropTypes.string,
}

const StyledLink = styled(Link)`
  font-family: inherit;
  color: inherit;
`

export default LinkItem
