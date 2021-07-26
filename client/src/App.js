import logo from './logo.svg';

import './App.css';
import React from 'react';
import SignUp from "./components/SignUp";
import NavBar from "./components/Nav"
import LogIn from "./components/LogIn"
import SearchShows from "./components/SearchShows"
import Carousel from "./components/Carousel"
import SearchResults from "./components/SearchResults"
import GoPremium from "./components/GoPremium"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { StoreProvider } from "./utils/GlobalState";
import ApolloClient from 'apollo-boost';
import Home from './pages/Home'




const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})
function App() {
  return (
    <div className="renderApp">
      <ApolloProvider client={client}>
        <Router>
          <div>
            <StoreProvider>
              <NavBar />
              
              <Switch>
              <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/gopremium" component={GoPremium} />
                <Route exact path="/searchbar" component={SearchShows} />
                <Route exact path="/carousel" component={Carousel} />
                <Route exact path="/SearchResults" component={SearchResults} />
                {/* <Route component={NoMatch} /> */}
              </Switch>
            </StoreProvider>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}




export default App;
