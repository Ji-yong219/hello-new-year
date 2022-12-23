import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import reportWebVitals from './reportWebVitals'

import loginState from './utils/reducers/loginState'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
const rootReducer = combineReducers({
  loginState,
})

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger))

const store = createStore(rootReducer, enhancer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
