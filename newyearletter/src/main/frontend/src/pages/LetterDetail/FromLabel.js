import styled from 'styled-components'

import PropTypes from 'prop-types'
import LetterInfoLabelBg from '../../assets/images/send.png'

function LetterInfoLabel({ author, money = 0 }) {
  return (
    <Container>
      <div>
        <AuthorInfo>
          From. <span className="bold">{author}</span>
        </AuthorInfo>

        <MoneyInfo>
          <span className="focus">{money.toLocaleString()}</span> 원과 함께
          편지를 보냈어요!
        </MoneyInfo>
      </div>
      <img src={LetterInfoLabelBg} alt="" />
    </Container>
  )
}

LetterInfoLabel.propTypes = {
  author: PropTypes.string.isRequired,
  money: PropTypes.number,
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  font-family: nanumRound;
  font-weight: 600;

  text-align: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  input:focus {
    outline: 2px solid var(--pink-200);
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
  }
`

const AuthorInfo = styled.div`
  font-size: 14px;

  .bold {
    font-weight: 800;
    font-size: 21px;
  }
`

const MoneyInfo = styled.div`
  font-size: 14px;

  .focus {
    font-weight: 800;
    font-size: 18px;
    color: var(--pink);
  }
`

export default LetterInfoLabel
