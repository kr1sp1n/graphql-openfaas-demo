const { GraphQLServer } = require('graphql-yoga')
const got = require('got')

const openfaasGateway = process.env.OPENFAAS_GATEWAY || 'http://127.0.0.1:8080'
const funcName = 'greet'

const typeDefs = `
  type Query {
    ${funcName}(name: String): String!
  }
`

const resolvers = {
  Query: {
    [funcName]: async (_, { name }) => {
      const funcPath = `/function/${funcName}`
  		const options = {
  			method: 'POST',
  			json: false,
  			encoding: 'utf8',
        body: name,
  		}
		  const result = (await got(`${openfaasGateway}${funcPath}`, options)).body
      return result
    }
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on localhost:4000'))
