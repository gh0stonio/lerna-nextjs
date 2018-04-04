// @flow
import React, { PureComponent } from 'react'

type Props = {
  text: string
}

export default class About extends PureComponent<Props> {
  render() {
    return <div>{this.props.text}</div>
  }
}
