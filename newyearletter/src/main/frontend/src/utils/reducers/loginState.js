const INIT_STATE = {
  isLogin: false,
  token: null,
  url: null,
}

function loginState(state = INIT_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        token: action.token,
        url: action.url,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        token: null,
        url: null,
      }
    default:
      return state
  }
}

export const login = (token, url) => ({ type: 'LOGIN', token: token, url: url })
export const logout = () => ({ type: 'LOGOUT' })

export default loginState
