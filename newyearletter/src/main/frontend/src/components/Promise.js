import styled from 'styled-components'
import PropTypes from 'prop-types'

import PromiseBg from '../assets/images/promise.png'
import { useSelector } from 'react-redux'
import { FONT_COLOR_OPTION, FONT_OPTION } from '../utils/constant'

function Promise({ editable = false, font, color, setValue }) {
  const { wish, wishFont, wishColor } = useSelector(state => state.infoState)
  return (
    <Container
      font={font !== undefined ? font : FONT_OPTION[wishFont]}
      color={color !== undefined ? color : FONT_COLOR_OPTION[wishColor]}
    >
      <div
        id="letter-content"
        onKeyDown={event => {
          if (event.key === 'Enter') {
            document.execCommand('insertLineBreak')
            event.preventDefault()
          }
        }}
        onInput={event => {
          setValue(event.target.outerText)
        }}
        contentEditable={editable ? true : false}
      >
        {wish !== undefined ? wish : null}
      </div>
      <img src={PromiseBg} alt="" />
    </Container>
  )
}

Promise.propTypes = {
  editable: PropTypes.bool,
  value: PropTypes.func,
  fontOption: PropTypes.number,
  colorOption: PropTypes.number,
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;

    background: none;
    border: none;
    color: ${({ color }) => color};
    text-align: center;

    font-family: ${({ font }) => font};
    font-weight: bold;
    font-size: 18px;

    padding: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input:focus {
    outline: 2px solid var(--pink-200);
  }

  @media (min-width: 500px) {
    font-size: 21px;
  }
`

export default Promise
