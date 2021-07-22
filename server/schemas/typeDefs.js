// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
     helloWorld: String
 }

`;

// export the typeDefs
module.exports = typeDefs;



// type Show {
//   _id: ID
//   showName: String
//   seasons: String
//   description: String
//   time: Int
//   image: String
// }

// type User {
//   _id: ID
//   userName: String
//   email: String
//   password: String
//   watchedShows: [Show]
//   wishList: [Show]
//   isPremium: Boolean
// }  



// type Query {
//     helloWorld: String
//   }