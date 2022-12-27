import styled from 'styled-components'
import PropTypes from 'prop-types'

import PromiseBg from '../assets/images/promise.png'

function Promise({ editable = false, defaultText = '' }) {
  return (
    <Container>
      <input disabled={editable ? false : true} value={defaultText} />
      <img src={PromiseBg} alt="" />
    </Container>
  )
}

Promise.propTypes = {
  editable: PropTypes.bool,
  defaultText: PropTypes.string,
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
    color: var(--brown);
    text-align: center;

    font-family: nanumRound;
    font-weight: bold;
    font-size: max(1.2rem, 21px);
  }

  input:focus {
    outline: 2px solid var(--pink-200);
  }
`

export default Promise
