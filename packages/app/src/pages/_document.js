// @flow
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

import type { Context } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps(context: Context) {
    const page = context.renderPage()
    const styles = extractCritical(page.html)

    return { ...page, ...styles }
  }

  constructor(props: *) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html lang={this.props.initialLanguage}>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body role="main">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
