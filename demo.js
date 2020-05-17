const gql = require('graphql-tag')
const { ApolloServer } = require('apollo-server')

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Shoe {
    brand: String!
    size: Int!
  }

  input ShoesInput {
    brand: String
    size: Int
  }

  input NewShoeInput {
    brand: String!
    size: Int!
  }

  type Mutation {
    newShoe(input: NewShoeInput!): Shoe!
  }

  type Query {
    me: User!
    shoes(input: ShoesInput): [Shoe]
  }
`
const resolvers = {
  Query: {
    shoes(_, { input }) {
      return [
        { brand: 'nike', size: 12},
        { brand: 'adidas', size: 14},
        { brand: 'puma', size: 10}
    ].filter(shoe => {
      return shoe.brand === input.brand
    })
    },
    me() {
      return {
        email: 'yo@master.com',
        avatar: 'http://pna.png',
        friends: []
      }
    }
  },
  Mutation: {
    newShoe(_, { input }) {
      return input
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(4000)
  .then(() => {
    console.log('listening on port 4000')
  })
