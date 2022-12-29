import styled from 'styled-components'

import SendCompleteLabelBg from '../../assets/images/send.png'

function SendCompleteLabel() {
  return (
    <Container>
      <input disabled value="용돈과 편지를 성공적으로 전달했어요!" />
      <img src={SendCompleteLabelBg} alt="" />
    </Container>
  )
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
    color: var(--brown-100);
    text-align: center;

    font-family: nanumRound;
    font-weight: 800;
    font-size: max(0.75rem, 13px);
  }

  input:focus {
    outline: 2px solid var(--pink-200);
  }
`

export default SendCompleteLabel
