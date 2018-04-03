// @flow
import React, { PureComponent } from 'react'

import withReduxSaga from '../decorators/ReduxSaga'
import AboutReducer from '../redux/modules/about'
import AboutSaga from '../sagas/about.saga'

type Props = {
  text: string
}

class About extends PureComponent<Props> {
  render() {
    return <div>{this.props.text}</div>
  }
}

export default withReduxSaga({ about: AboutReducer }, { key: 'about', sagas: [AboutSaga] }, ({ about }) => ({
  text: about.text
}))(About)
