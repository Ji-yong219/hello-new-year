import styled from 'styled-components'
import PropTypes from 'prop-types'

import PromiseBg from '../assets/images/promise.png'
import { useSelector } from 'react-redux'

function Promise({ editable = false, font, color, setValue }) {
  const { wish, wishFont, wishColor } = useSelector(state => state.infoState)
  return (
    <Container
      font={font !== undefined ? font : wishFont}
      color={color !== undefined ? color : wishColor}
    >
      <input
        disabled={editable ? false : true}
        defaultValue={wish}
        onChange={
          setValue !== undefined
            ? event => setValue(event.target.value)
            : () => {}
        }
      />
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

  input {
    position: absolute;
    width: 100%;
    height: 100%;

    background: none;
    border: none;
    color: ${({ color }) => color};
    text-align: center;

    font-family: ${({ font }) => font};
    font-weight: bold;
    font-size: 21px;

    padding: 12px;
  }

  input:focus {
    outline: 2px solid var(--pink-200);
  }
`

export default Promise
