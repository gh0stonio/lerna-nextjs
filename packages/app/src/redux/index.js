// @flow
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules'
import rootSaga from '../sagas/root.saga'

const enhancer = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension') // eslint-disable-line import/no-extraneous-dependencies
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = Object.assign({}, createStore(rootReducer, enhancer([sagaMiddleware])))

  store.runSagaTask = (saga = rootSaga) => {
    const sagaTask = sagaMiddleware.run(saga)
    store.sagaTask = sagaTask

    return sagaTask
  }
  store.runSagaTask()

  return store
}
