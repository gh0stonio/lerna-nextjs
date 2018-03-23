import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'

import store from '../redux'
import { asyncInjectors } from '../utils/asyncInjectors'

const withReduxSaga = (asyncReducer, asyncSagas, ...connectArgs) => ComposedComponent => {
  if (asyncReducer) asyncInjectors.injectReducer({ store, reducer: asyncReducer })
  if (asyncSagas) asyncInjectors.injectSagas({ store, ...asyncSagas })

  return withRedux(() => store, ...connectArgs)(nextReduxSaga(ComposedComponent))
}

export default withReduxSaga
