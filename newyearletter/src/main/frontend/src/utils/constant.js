import cafeTypo from '../assets/images/typo_icon_cafe.png'
import chosunTypo from '../assets/images/typo_icon_chosun.png'
import maruTypo from '../assets/images/typo_icon_maru.png'
import SFTypo from '../assets/images/typo_icon_SF.png'

import CarrotIcon from '../assets/images/customize/icon/i_carrot.png'
import CushionIcon from '../assets/images/customize/icon/i_cushion.png'
import FlowerIcon from '../assets/images/customize/icon/i_flower.png'
import HanbokPinkIcon from '../assets/images/customize/icon/i_hanbok.png'
import HanbokBlueIcon from '../assets/images/customize/icon/i_hanbok2.png'
import PocketIcon from '../assets/images/customize/icon/i_pocket.png'
import RibbonIcon from '../assets/images/customize/icon/i_ribbon.png'
import SunglassesIcon from '../assets/images/customize/icon/i_sunglasses.png'

import Carrot from '../assets/images/customize/accessory/Carrot.png'
import Cushion from '../assets/images/customize/accessory/Cushion.png'
import Flower from '../assets/images/customize/accessory/Flower.png'
import HanbokPink from '../assets/images/customize/accessory/Hanbok.png'
import HanbokBlue from '../assets/images/customize/accessory/Hanbok2.png'
import Pocket from '../assets/images/customize/accessory/Pocket.png'
import Ribbon from '../assets/images/customize/accessory/Ribbon.png'
import Sunglasses from '../assets/images/customize/accessory/Sunglasses.png'

import BlackRabbit from '../assets/images/customize/rabbit/rabbit_2c292b.png'
import GreyRabbit from '../assets/images/customize/rabbit/rabbit_7a7b7c.png'
import LightGreyRabbit from '../assets/images/customize/rabbit/rabbit_a9aaab.png'
import PinkRabbit from '../assets/images/customize/rabbit/rabbit_fed1eb.png'
import WhiteRabbit from '../assets/images/customize/rabbit/rabbit_fffdff.png'
import styled from 'styled-components'

import Background from '../assets/images/background.png'
import BackgroundAlt from '../assets/images/background_alt.png'

export const SITE_NAME = '2023 묘한 편지'
export const SITE_DESC = '2023년, 흑토끼의 묘한 편지함을 찾아오세요'

export const API_ADDRESS = 'http://203.252.240.74:8080'

export const WISH_INIT_STATE = '2023년엔 행복한 일만 가득하길'

export const CUSTOM_INIT_STATE = {
  wishFont: 1,
  wishColor: 1,
  rabbitColor: 2,
  rabbitAcc: 0,
}
export const FONT_OPTION = [
  'Cafe24Surround',
  'ChosunCentennial',
  'MaruBuri',
  'SF함박눈',
]

export const FONT_COLOR_OPTION = [
  '#2F2F2F',
  '#83624B',
  '#4B7947',
  '#476EC6',
  '#A95CD9',
  '#F2A0B3',
]

export const FONT_TYPO_OPTION = [cafeTypo, chosunTypo, maruTypo, SFTypo]

export const RABBIT_OPTION = [
  BlackRabbit,
  GreyRabbit,
  LightGreyRabbit,
  PinkRabbit,
  WhiteRabbit,
]

const Accessory = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: ${({ width }) => width};
  z-index: ${({ behind }) => (behind !== undefined ? '0' : '2')};
  height: auto;
`

export const BACKGROUND_OPTION = [Background, BackgroundAlt]

export const ACCESSORY_OPTION = [
  <Accessory src={Carrot} width="40%" top="45%" left="45%" />,
  <Accessory src={Cushion} behind width="100%" top="75%" left="0%" />,
  <Accessory src={HanbokPink} width="86%" top="50%" left="6.5%" />,
  <Accessory src={HanbokBlue} width="87%" top="50%" left="6%" />,
  <Accessory src={Pocket} width="30%" top="48%" left="50%" />,
  <Accessory src={Ribbon} width="40%" top="18%" left="30%" />,
  <Accessory src={Sunglasses} width="40%" top="35%" left="37%" />,
  <Accessory src={Flower} width="40%" top="14%" left="21%" />,
]

export const ACCESSORY_ICON_OPTION = [
  CarrotIcon,
  CushionIcon,
  HanbokPinkIcon,
  HanbokBlueIcon,
  PocketIcon,
  RibbonIcon,
  SunglassesIcon,
  FlowerIcon,
]

export const RABBIT_COLOR_OPTION = [
  '#2C292B',
  '#7A7B7C',
  '#A9AAAB',
  '#FED1EB',
  '#FFFDFF',
]
