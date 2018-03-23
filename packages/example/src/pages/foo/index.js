import { Decorators } from '@pwa/core'
import { compose } from 'recompose'

import withLayout from '../../decorators/Layout'
import reducer from '../../redux/modules'
import FooSaga from '../../sagas/foo.saga'
import Foo from './Foo'

const enhance = compose(
  Decorators.withReduxSaga({ example: reducer }, { key: 'example', sagas: [FooSaga] }),
  withLayout
)

export default enhance(Foo)
