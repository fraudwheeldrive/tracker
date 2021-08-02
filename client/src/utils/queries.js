import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
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
`;