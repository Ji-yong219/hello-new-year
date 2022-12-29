import { SmallText } from '../InviteLetter'
import { Wrapper } from '../Main'
import Money50000 from '../../assets/images/money-50000.png'
import Money10000 from '../../assets/images/money-10000.png'
import Money5000 from '../../assets/images/money-5000.png'
import Money1000 from '../../assets/images/money-1000.png'
import styled from 'styled-components'
import Letter from '../../components/Letter'
import { Input } from '../Login'
import ButtonItem from '../../components/ButtonItem'
import Logo from '../../components/Logo'

import MoneyButton from '../../components/MoneyButton'

function SendContent({
  nickName,
  money,
  selectMoney,
  setAuthor,
  setContent,
  onClick,
}) {
  return (
    <>
      <Wrapper gap={2}>
        <Logo sx={1.75} />

        <SmallText>{nickName}님을 응원하는 마음만큼 용돈을 주세요!</SmallText>

        <MoneyWrapper>
          <MoneyButton
            src={Money50000}
            isActive={money[50000]}
            onClick={() => selectMoney(50000)}
          />
          <MoneyButton
            src={Money10000}
            isActive={money[10000]}
            onClick={() => selectMoney(10000)}
          />
          <MoneyButton
            src={Money5000}
            isActive={money[5000]}
            onClick={() => selectMoney(5000)}
          />
          <MoneyButton
            src={Money1000}
            isActive={money[1000]}
            onClick={() => selectMoney(1000)}
          />
        </MoneyWrapper>
      </Wrapper>

      <SmallInput
        placeholder="보내시는 분의 이름을 적어주세요"
        onChange={event => {
          setAuthor(event.target.value)
        }}
      />

      <SmallText>편지 내용은 최대 100자까지 작성해주세요!</SmallText>

      <Letter editable={true} setValue={setContent} />

      <ButtonItem onClick={() => onClick()}>보내기</ButtonItem>
    </>
  )
}

export const SmallInput = styled(Input)`
  width: max(70%, 260px);
  padding: 14px;

  font-weight: 800;
  font-size: max(0.8rem, 14px);
  borderRadius: 9999px
  filter: none;
`

const MoneyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: max(1rem, 18px);
  > div {
    position: relative;
  }
`
export default SendContent
