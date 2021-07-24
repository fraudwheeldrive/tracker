import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';

const Home = () => {
  const loggedIn = Auth.loggedIn();


    //make sure links to are exact path
    return (
      <div className="home-box">
        <h4 className="center">Logged in!  Welcome. This is a description of the website</h4>
      </div>
    );
  }
  
  export default Home;