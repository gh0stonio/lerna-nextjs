// @flow
import type { Store as ReduxStore } from 'redux'

export type Store = ReduxStore<*, *> & {
  runSagaTask: Function
}

export type AsyncReducer = Object
export type AsyncSagas = {
  key: string,
  sagas: Array<any>
}
