// @flow
import { isArray, isEmpty, some } from 'lodash'

import type { Store, AsyncReducer, AsyncSagas } from '../../types/redux'
import makeRootReducer from '../../redux'

class AsyncInjectors {
  _sagasFactory: Object

  constructor() {
    this._sagasFactory = {}
  }

  injectReducer(store: Store, asyncReducer: AsyncReducer) {
    store.replaceReducer(makeRootReducer(asyncReducer))
  }

  injectSagas(store: Store, asyncSagas: AsyncSagas) {
    if (!isArray(asyncSagas.sagas))
      throw new Error('injectAsyncSagas: Expected `sagas` to be an array of generator functions')
    if (isEmpty(asyncSagas.sagas)) throw new Error('injectAsyncSagas: Received an empty `sagas` array')

    // check if the key already exists
    if (!this._sagasFactory[asyncSagas.key]) {
      this._sagasFactory = {
        ...this._sagasFactory,
        [asyncSagas.key]: {
          sagas: asyncSagas.sagas
        }
      }
    }

    this.runSaga(store, asyncSagas.key)
  }

  runSaga(store: Store, key: string) {
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
