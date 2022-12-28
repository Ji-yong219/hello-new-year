import styled from 'styled-components'
import PropTypes from 'prop-types'

import LetterBg from '../assets/images/letter.png'

function Letter({ editable = false, defaultText }) {
  return (
    <Container>
      <div
        onKeyDown={event => {
          if (event.key === 'Enter') {
            document.execCommand('insertLineBreak')
            event.preventDefault()
          }
        }}
        contentEditable={editable ? true : false}
      >
        {defaultText ? defaultText : null}
      </div>
      <img src={LetterBg} alt="" />
    </Container>
  )
}

Letter.propTypes = {
  editable: PropTypes.bool,
  defaultText: PropTypes.string,
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  vertical-align: center;

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;

    background: none;
    border: none;
    color: var(--brown);
    text-align: center;

    font-family: nanumRound;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;

    padding: max(1rem, 18px);
    white-space: pre-wrap;
  }

  div:focus {
    outline: 2px solid var(--pink-200);
  }
`

export default Letter
