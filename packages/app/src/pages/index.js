// @flow
import { Decorators } from '@pwa/core'
import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'

import { Link } from '../routes'

type Props = {}

const LinkContent = styled.a`
  color: red;
  cursor: pointer;
`

class HomePage extends PureComponent<Props> {
  render() {
    return (
      <div>
        <div>Welcome to PWA</div>
        <Link route="foo">
          <LinkContent>foo</LinkContent>
        </Link>
      </div>
    )
  }
}

const enhance = compose(Decorators.withCoreLayout, Decorators.withReduxSaga())

export default enhance(HomePage)
