import { SmallText } from '../InviteLetter'
import { Wrapper } from '../Main'
import MoneyButton from './MoneyButton'

import Money50000 from '../../assets/images/money-50000.png'
import Money10000 from '../../assets/images/money-10000.png'
import Money5000 from '../../assets/images/money-5000.png'
import Money1000 from '../../assets/images/money-1000.png'
import styled from 'styled-components'
import Letter from '../../components/Letter'
import { Input } from '../Login'
import ButtonItem from '../../components/ButtonItem'
import Logo from '../../components/Logo'

function SendContent({ nickName, money, selectMoney, setSend }) {
  return (
    <>
      <Wrapper gap={2}>
        <Logo sx={2.5} />

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
        style={{ borderRadius: '9999px' }}
        placeholder="보내시는 분의 이름을 적어주세요"
      />

      <Letter editable={true} />

      <ButtonItem onClick={() => setSend(true)}>보내기</ButtonItem>
    </>
  )
}

export const SmallInput = styled(Input)`
  width: max(0rem, 260px);
  padding: max(0rem, 14px);

  font-size: max(1rem, 16px);

  filter: none;
`

const MoneyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: max(1rem, 18px);
  > div {
    position: relative;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`
export default SendContent
