import { CUSTOM_INIT_STATE } from '../constant'
import PropTypes from 'prop-types'

const INIT_STATE = {
  wish: '',
  money: 0,
  wishFont: CUSTOM_INIT_STATE.wishFont,
  wishColor: CUSTOM_INIT_STATE.wishColor,
  rabbitColor: CUSTOM_INIT_STATE.rabbitColor,
  rabbitAcc: CUSTOM_INIT_STATE.rabbitAcc,
  background: 0,
}

function infoState(state = INIT_STATE, action) {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        wish: action.wish,
        money: action.money,
        wishFont: parseInt(action.wishFont),
        wishColor: parseInt(action.wishColor),
        rabbitColor: parseInt(action.rabbitColor),
        rabbitAcc: parseInt(action.rabbitAcc),
        background: parseInt(action.background),
      }
    case 'FREE':
      return INIT_STATE
    default:
      return state
  }
}

export const setInfo = (wish, money, customStr) => ({
  type: 'SET',
  wish: wish,
  money: money,
  wishFont: customStr.split(';')[0],
  wishColor: customStr.split(';')[1],
  rabbitColor: customStr.split(';')[2],
  rabbitAcc: customStr.split(';')[3],
  background: customStr.split(';')[4],
})

setInfo.propTypes = {
  wish: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
  customStr: PropTypes.string.isRequired,
}

export const freeInfo = () => ({
  type: 'FREE',
})

export default infoState
