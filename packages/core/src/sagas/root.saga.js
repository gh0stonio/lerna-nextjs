// @flow
import type { Saga } from 'redux-saga'
import { all } from 'redux-saga/effects'

function* rootSaga(): Saga<*> {
  yield all([])
}

export default rootSaga
