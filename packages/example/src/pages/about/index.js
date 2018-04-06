// @flow
import { Decorators } from '@pwa/core'
import { compose } from 'recompose'

import About from './About'
import AboutReducer from '../../redux/about'
import AboutSaga from '../../sagas/about'

const enhance = compose(
  Decorators.withReduxSaga({ about: AboutReducer }, { key: 'about', sagas: [AboutSaga] }, ({ about }) => ({
    text: about.text
  }))
)

export default enhance(About)
