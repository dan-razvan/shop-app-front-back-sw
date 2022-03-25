const fastify = require('fastify')({ logger: true })
const UserAction = require('./UserAction')
let actions = null

// to disable cors
fastify.register(require('fastify-cors'), {
  origin: '*',
  methods: ['POST'],
})

//ROUTIGS
//REST API
// -handshake (server -> feedback)
// 1. HTTP status codes (200, 404, ...) headers ()
// 2. return JSON {status: ''}
fastify.post('/api/analytics', (request, reply) => {
  const userAction = new UserAction('dummy')
  actions.push(userAction)
  return { status: 'OK' }
})

const start = async () => {
  try {
    await fastify.listen(3001)
    actions = []
    console.log('Server Running')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
