/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your schema
 */

module.exports = {
  Query: {
    pets(_, {input}, ctx) {
      return ctx.models.Pet.findMany(input)
    },
    pet(_, {input}, ctx) {
      console.log("Query pet")
      return ctx.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      return ctx.models.Pet.create(input)
    }
  },
  // Mutation: {
    
  // },
  Pet: {
    owner(pet, _, ctx) {
      console.log("pet _> owenr")
      return ctx.models.User.findOne()
    }
  }
  // User: {
    
  // }
}
