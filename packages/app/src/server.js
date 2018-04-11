const next = require('next')
const express = require('express')
const compression = require('compression')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV === 'development'
const app = next({ dir: './src', dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  if (!dev) server.use(compression())

  server.get('*', handler)

  server.listen(port, err => {
    if (err) throw err
    console.info(`> Ready on http://localhost:${port}`)
  })
})
