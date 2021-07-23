const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    shows: [Show]
    wishlist: [Show]
    ispremium: Boolean
  }

  type Show {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    shows(username: String): [Show]
    show(_id: ID!): Show
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addShow(showText: String!): Show
  }
`;

module.exports = typeDefs;






// type Query {
//     helloWorld: String
//   }
// type Query {
//     shows: [show]
//     show(showName: String!):Show
//   }