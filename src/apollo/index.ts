import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'

// const httpLink = createHttpLink({ uri: enviroment.url + '/graphql' })

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('token')

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   }
// })

export const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache()
})

export default client
