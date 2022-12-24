import axios from 'axios';

const INIT_STATE = {
  isLogin: false,
}

function loginState(state = INIT_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      const request = axios.post('/api/users/login', action.dataToSubmit)
          .then(response => response.data)

      return {
        ...state,
        isLogin: true,
        payload: request
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

export const login = (body) => ({ type: 'LOGIN', dataToSubmit: body })
export const logout = () => ({ type: 'LOGOUT' })

export default loginState
