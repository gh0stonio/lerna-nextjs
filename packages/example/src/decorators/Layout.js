import React, { PureComponent } from 'react'
import Head from 'next/head'
import { Decorators } from '@pwa/core'

import Header from '../components/Header'
import Footer from '../components/Footer'

const withLayout = ComposedComponent => {
  class ExampleLayout extends PureComponent {
    static async getInitialProps(context) {
      return ComposedComponent.getInitialProps ? ComposedComponent.getInitialProps(context) : {}
    }

    render() {
      return (
        <React.Fragment>
          <Head>
            <title>PWA - Example package</title>
          </Head>

          <Header />
          <ComposedComponent {...this.props} />
          <Footer />
        </React.Fragment>
      )
    }
  }

  return Decorators.withCoreLayout(ExampleLayout)
}

export default withLayout
