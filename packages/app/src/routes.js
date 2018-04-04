const routes = require('next-routes')()

routes.add('contact', '/contact')
routes.add({ name: 'about', pattern: '/example/about-us', page: 'example/about' })

module.exports = routes
