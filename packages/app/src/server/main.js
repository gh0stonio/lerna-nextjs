const next = require('next')
const express = require('express')
const routes = require('../routes')

const app = next({ dir: './src', dev: process.env.NODE_ENV === 'development' })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(3000, err => {
      if (err) throw err
      console.info('> Ready on http://localhost:3000')
    })
})
