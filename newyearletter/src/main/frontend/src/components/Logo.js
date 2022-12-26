import logo from '../assets/images/logo.png'
import styled from 'styled-components'
import LinkItem from './LinkItem'

function Logo() {
  return (
    <Container>
      <LinkItem target="/">
        <img src={logo} />
      </LinkItem>
    </Container>
  )
}

const Container = styled.div`
  font-family: 'score';
  font-weight: 600;
  font-size: max(2.5rem, 36px);

  img {
    width: max(10rem, 150px);
    height: auto;
  }
`

export default Logo
