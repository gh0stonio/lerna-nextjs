import { testSaga } from 'redux-saga-test-plan'

import rootSaga from './'

describe('rootSaga', () => {
  it('should yield effects in the right order', () => {
    testSaga(rootSaga)
      .next()
      .all([])

      .next()
      .isDone()
  })
})
