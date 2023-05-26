import styled from 'styled-components'
import ButtonItem from './ButtonItem'

function HelpModal({ setModalOpen }) {
  const closeModal = () => setModalOpen(false)
  return (
    <ModalContainer>
      <Title>안녕하세요!</Title>

      <Content>
        주변 지인에게 내 편지함을 공유하고, 새해 편지와 용돈을 받으세요.
      </Content>
      <Content>
        받은 편지는
        <Focus> 2023년 1월 1일에 개봉</Focus>할 수 있구요.
      </Content>

      <Content>
        <Focus>내 화면 꾸미기를 클릭</Focus>해서, 내 토끼를 예쁘게 꾸며보세요!
        꾸민 토끼는 편지함에서도 볼 수 있어요.
      </Content>
      <ButtonItem onClick={closeModal}>닫 기</ButtonItem>
    </ModalContainer>
  )
}

export const ModalContainer = styled.div`
  width: 400px;

  z-index: 999;

  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;
  border-radius: 12px;
  border: 1px solid var(--pink-100);
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 400px) {
    width: 90%;
  }
`
export const Content = styled.div`
  font-family: nanumRound;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  word-break: keep-all;
  text-align: center;
`

export const Title = styled(Content)`
  font-size: 24px;
`

export const Focus = styled.span`
  color: var(--pink);
`
export default HelpModal
