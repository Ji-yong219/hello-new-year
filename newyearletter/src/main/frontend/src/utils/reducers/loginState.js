const INIT_STATE = {
  isLogin: false,
}

function loginState(state = INIT_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
      }
    default:
      return state
  }
}

export const login = () => ({ type: 'LOGIN' })
export const logout = () => ({ type: 'LOGOUT' })

export default loginState
