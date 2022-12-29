import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { BACKGROUND_OPTION } from '../utils/constant'

function Container({ customBg, children }) {
  const { background } = useSelector(state => state.infoState)
  return (
    <BackgroundContainer
      background={
        customBg !== undefined
          ? BACKGROUND_OPTION[customBg]
          : background !== undefined
          ? BACKGROUND_OPTION[background]
          : BACKGROUND_OPTION[0]
      }
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
  background-repeat: repeat;
`

const Content = styled.div`
  min-width: 380px;
  max-width: 500px;
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
