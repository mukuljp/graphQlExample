/* eslint-disable linebreak-style */
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
   type User {
    id: ID!
    firstName: String
    age: Int
    company: Company
   }
   
   type Company{
    id: ID!
    name: String
    description: String
    user: [User]
  }
  
  type Query {
        hello: String! 
        user(id: ID!): User
        company(id: ID!): Company
   }
   
   type Mutation{
   createUser(firstName:String!, age:Int!): User
   }
 `;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
