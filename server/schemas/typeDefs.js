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
      users: [User]
      user(userName: String!):User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

// export the typeDefs
module.exports = typeDefs;







// type Query {
//     helloWorld: String
//   }