import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function LinkItem({ target = '', children }) {
  return <StyledLink to={target}>{children}</StyledLink>
}

LinkItem.propTypes = {
  target: PropTypes.string,
}

const StyledLink = styled(Link)`
  font-family: inherit;
  color: inherit;
`

export default LinkItem
