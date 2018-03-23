// @flow
import React, { PureComponent } from 'react'

type Props = {
  pageName: String
}

export default class FooPage extends PureComponent<Props> {
  static defaultProps = {
    pageName: 'Foo'
  }

  render() {
    return <div>Example page {this.props.pageName}</div>
  }
}
