// @flow
import type { Saga } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'
import { updateFoo } from '../redux/modules/about'

export function* fakeEvent(): Saga<*> {
  yield put(updateFoo('Working !'))
}

export default function* watchAbout(): Saga<*> {
  yield fork(fakeEvent)
}
