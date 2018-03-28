// @flow
import React, { PureComponent, Fragment } from 'react'
import styled from 'react-emotion'
import { Link } from '../routes'

const LinkContent = styled.a`
  text-decoration: none;
  color: red;
`

export default class Contact extends PureComponent<*> {
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
