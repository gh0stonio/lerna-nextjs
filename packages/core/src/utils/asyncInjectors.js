import { isArray, isEmpty, some } from 'lodash'

import makeRootReducer from '../redux/modules'

class AsyncInjectors {
  constructor() {
    this._sagasFactory = {}
  }

  injectReducer({ store, reducer }) {
    store.replaceReducer(makeRootReducer(reducer))
  }

  injectSagas({ store, key, sagas }) {
    if (!isArray(sagas)) console.warn('injectAsyncSagas: Expected `sagas` to be an array of generator functions')
    if (isEmpty(sagas)) console.warn('injectAsyncSagas: Received an empty `sagas` array')

    // check if the key already exists
    if (!this._sagasFactory[key]) {
      this._sagasFactory = {
        ...this._sagasFactory,
        [key]: {
          sagas
        }
      }
    }

    this.runSaga(store, key)
  }

  runSaga(store, key) {
    if (!this._sagasFactory[key]) return
    // check if an existing tasks for this saga is already running
    // in case the saga is shared between pages
    const isAlreadyRunning = some(this._sagasFactory[key].tasks, task => task.isRunning())
    if (isAlreadyRunning) return
    // otherwise run the sagas and add the tasks
    this._sagasFactory = {
      ...this._sagasFactory,
      [key]: {
        ...this._sagasFactory[key],
        tasks: this._sagasFactory[key].sagas.map(store.runSagaTask)
      }
    }
  }
}

export const asyncInjectors = new AsyncInjectors()
