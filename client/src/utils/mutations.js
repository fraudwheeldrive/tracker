import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const SAVE_ITEM = gql`
    mutation saveItem($content: movieContent!){
        saveItem(content: $content){
          _id
          username
          email
          itemCount
          savedItem {
              movieId
              name
              poster_path
              overview
            }
        }
    }
`;