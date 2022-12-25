const INIT_STATE = {
  isLogin: false,
  token: null,
}

function loginState(state = INIT_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        token: action.token,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        token: null,
      }
    default:
      return state
  }
}

export const login = token => ({ type: 'LOGIN', token: token })
export const logout = () => ({ type: 'LOGOUT' })

export default loginState
