import styled from 'styled-components'

import Background from '../assets/images/background.png'
import BackgroundAlt from '../assets/images/background_old.png'

function Container({ alt, children }) {
  return (
    <BackgroundContainer
      background={alt !== undefined ? BackgroundAlt : Background}
    >
      <Content>{children}</Content>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 380px;
  max-width: 100vw;
  min-height: 100vh;
  height: auto;

  background: url(${({ background }) => background});
  background-size: cover;
  background-repeat: repeat;
`

const Content = styled.div`
  min-width: 380px;
  max-width: 450px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: max(3rem, 54px) max(1.5rem, 27px);
  align-items: center;
  gap: max(2rem, 36px);

  color: var(--brown);
  @media (max-height: 560px) {
    height: auto;
  }
`
export default Container
