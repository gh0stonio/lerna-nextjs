import { testSaga } from 'redux-saga-test-plan'

import watchAbout, { fakeEvent } from '../about.saga'
import { updateFoo } from '../../redux/modules/about'

describe('watchAbout', () => {
  it('should yield effects in the right order', () => {
    testSaga(watchAbout)
      .next()
      .fork(fakeEvent)

      .next()
      .isDone()
  })
})

describe('fakeEvent', () => {
  it('should yield effects in the right order', () => {
    testSaga(fakeEvent)
      .next()
      .put(updateFoo('Working !'))

      .next()
      .isDone()
  })
})
