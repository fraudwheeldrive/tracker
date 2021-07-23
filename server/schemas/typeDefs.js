// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Show {
    _id: ID
    showName: String
    seasons: String
    description: String
    time: Int
    image: String
  }
  
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    watchedShows: [Show]
    wishList: [Show]
    isPremium: Boolean
  }  

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(userName: String!): User
    shows(userName: String): [Show]

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    updateShow(_id: ID!, )
  }
`;

// export the typeDefs
module.exports = typeDefs;







// type Query {
//     helloWorld: String
//   }
// type Query {
//     shows: [show]
//     show(showName: String!):Show
//   }