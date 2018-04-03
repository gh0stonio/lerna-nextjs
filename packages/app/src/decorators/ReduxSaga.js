// @flow
import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import { asyncInjectors } from '../utils/asyncInjectors'

import { store } from '../redux'

const withReduxSaga = (asyncReducer?: Object, ...connectArgs: Array<any>) => (
  ComposedComponent: React.ComponentType<*>
) => {
  if (asyncReducer) asyncInjectors.injectReducer(store, asyncReducer)

  return withRedux(() => store, ...connectArgs)(nextReduxSaga(ComposedComponent))
}

export default withReduxSaga
