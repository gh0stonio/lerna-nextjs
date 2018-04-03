// @flow
import React, { PureComponent } from 'react'
import AboutReducer from '../redux/modules/about'
import withReduxSaga from '../decorators/ReduxSaga'

type Props = {
  text: string
}

class About extends PureComponent<Props> {
  render() {
    return <div>{this.props.text}</div>
  }
}

export default withReduxSaga({ about: AboutReducer }, ({ about }) => ({
  text: about.text
}))(About)
