const routes = require('next-routes')()

routes.add({ name: 'home', pattern: '/', page: '' }).add({ name: 'foo', pattern: '/example/foo', page: 'example/foo' })

module.exports = routes
