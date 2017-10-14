/**
 * 测试同一个action中dispatch多个action,视图的渲染会触发多少次
 */

import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import React from 'react'
import reducers from './reducer'
import App from './app'

const middlewares = [thunk, logger]
const store = createStore(reducers, applyMiddleware(...middlewares))

const Index = () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  )
}

export default Index