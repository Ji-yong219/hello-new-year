const INIT_STATE = {
  isLodaing: false,
}

function loadingState(state = INIT_STATE, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        isLoading: true,
      }
    case 'FREE_LOADING':
      return INIT_STATE
    default:
      return state
  }
}

export const setLoading = () => ({
  type: 'SET_LOADING',
})

export const freeLoading = () => ({
  type: 'FREE_LOADING',
})

export default loadingState
