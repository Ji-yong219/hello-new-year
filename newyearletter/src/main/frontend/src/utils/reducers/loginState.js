const INIT_STATE = {
  isLogin: false,
  token: null,
  uuid: null,
}

function loginState(state = INIT_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        token: action.token,
        uuid: action.uuid,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        token: null,
        uuid: null,
      }
    default:
      return state
  }
}

export const login = (token, uuid) => ({
  type: 'LOGIN',
  token: token,
  uuid: uuid,
})
export const logout = () => ({ type: 'LOGOUT' })

export default loginState
