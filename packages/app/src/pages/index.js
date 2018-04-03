// @flow
import React, { PureComponent, Fragment } from 'react'
import styled from 'react-emotion'
import { Link } from '../routes'
import withReduxSaga from '../decorators/ReduxSaga'

const LinkContent = styled.a`
  text-decoration: none;
  color: red;
`

class Home extends PureComponent<*> {
  render() {
    return (
      <Fragment>
        <Link route="about">
          <LinkContent>About us</LinkContent>
        </Link>
        <Link route="contact">
          <LinkContent>Contact</LinkContent>
        </Link>
      </Fragment>
    )
  }
}

export default withReduxSaga()(Home)
