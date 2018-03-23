import { createStore as createReduxStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas/root.saga'
import makeRootReducer from './modules'

const createStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  let enhancer
  const middleware = [sagaMiddleware]

  if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require('redux-devtools-extension') // eslint-disable-line import/no-extraneous-dependencies
    enhancer = composeWithDevTools(applyMiddleware(...middleware))
  } else {
    enhancer = applyMiddleware(...middleware)
  }

  const store = createReduxStore(makeRootReducer(), initialState, enhancer)

  store.runSagaTask = (saga = rootSaga) => {
    const sagaTask = sagaMiddleware.run(saga)
    store.sagaTask = sagaTask

    return sagaTask
  }
  store.runSagaTask()

  return store
}

export default createStore()
