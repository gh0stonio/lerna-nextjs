// @flow
import type { Saga } from 'redux-saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(): Saga<*> {
  yield all([])
}
