// @flow
import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'

import store from '../redux'

const withReduxSaga = (...connectArgs: Array<any>) => (ComposedComponent: React.ComponentType<*>) =>
  withRedux(store, ...connectArgs)(nextReduxSaga(ComposedComponent))

export default withReduxSaga
