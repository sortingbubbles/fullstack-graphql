const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String
    name: String!
    type: String
    owner: User
  }

  input PetInput {
    name: String
    id: ID
  }

  input NewPetInput {
    name: String!
    type: String!
  }

  type Mutation {
    newPet(input: NewPetInput!): Pet!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet!
  }
`;

module.exports = typeDefs
