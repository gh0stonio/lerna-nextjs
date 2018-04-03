// @flow
import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import { asyncInjectors } from '../utils/asyncInjectors'

import type { AsyncReducer, AsyncSagas } from '../types/redux'
import { store } from '../redux'

const withReduxSaga = (asyncReducer?: AsyncReducer, asyncSagas?: AsyncSagas, ...connectArgs: Array<any>) => (
  ComposedComponent: React.ComponentType<*>
) => {
  if (asyncReducer) asyncInjectors.injectReducer(store, asyncReducer)
  if (asyncSagas) asyncInjectors.injectSagas(store, asyncSagas)

  return withRedux(() => store, ...connectArgs)(nextReduxSaga(ComposedComponent))
}

export default withReduxSaga
