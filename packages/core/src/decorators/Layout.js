import React, { PureComponent } from 'react'
import Head from 'next/head'

const withCoreLayout = ComposedComponent => {
  class CoreLayout extends PureComponent {
    static async getInitialProps(context) {
      return ComposedComponent.getInitialProps ? ComposedComponent.getInitialProps(context) : {}
    }

    render() {
      return (
        <React.Fragment>
          <Head>
            <title>PWA</title>
          </Head>
          <ComposedComponent {...this.props} />
        </React.Fragment>
      )
    }
  }

  return CoreLayout
}

export default withCoreLayout
