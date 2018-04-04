// @flow
import { Decorators } from '@pwa/core'
import { compose } from 'recompose'

import About from './About'
import AboutReducer from '../../redux/modules/about'
import AboutSaga from '../../sagas/about.saga'

const enhance = compose(
  Decorators.withReduxSaga({ about: AboutReducer }, { key: 'about', sagas: [AboutSaga] }, ({ about }) => ({
    text: about.text
  }))
)

export default enhance(About)
