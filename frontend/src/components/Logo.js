import logo from '../assets/images/logo.png'
import styled from 'styled-components'
import LinkItem from './LinkItem'
import PropTypes from 'prop-types'

function Logo({ sx = 3 }) {
  return (
    <Container sx={sx}>
      <LinkItem target="/">
        <img src={logo} alt="" />
      </LinkItem>
    </Container>
  )
}

Logo.propTypes = {
  sx: PropTypes.number,
}

const Container = styled.div`
  font-family: 'score';
  font-weight: 600;
  font-size: 36px;

  img {
    width: ${({ sx }) => sx * 50}px;
    height: auto;
  }
`

export default Logo
