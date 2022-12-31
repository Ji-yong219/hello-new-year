import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

import loginState from './loginState'
import infoState from './infoState'
import loadingState from './loadingState'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

export const rootReducer = combineReducers({
  loginState,
  infoState,
  loadingState,
})

const perReducer = persistReducer(persistConfig, rootReducer)

// const enhancer =
//   process.env.NODE_ENV === 'production'
//     ? compose(applyMiddleware())
//     : composeWithDevTools(applyMiddleware(logger))

// 리듀서+optional들을 넣어서 스토어를 만들어준다.
const store = createStore(perReducer, compose(applyMiddleware()))

export default store
