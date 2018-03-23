import { fork, put } from 'redux-saga/effects'

import { updateFoo } from '../redux/modules/dummy'

export function* fakeEvent() {
  yield put(updateFoo('bizz'))
}

export default function* watchFoo() {
  yield fork(fakeEvent)
}
