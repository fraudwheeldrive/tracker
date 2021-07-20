import logo from './logo.svg';
import './App.css';
import React from 'react';
import SignUp from "./components/SignUp";
import Nav from "./components/Nav"
import LogIn from "./components/LogIn"
import SearchBar from "./components/SearchBar"
import Carousel from "./components/Carousel"
import SearchResults from "./components/SearchResults"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

    function App() {
      return (
        <div class="renderApp">
        {/* <ApolloProvider client={client}> */}
          <Router>
            <div>
              {/* <StoreProvider> */}
                <Nav />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={LogIn} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/searchbar" component={SearchBar} />
                  <Route exact path="/carosel" component={Carousel} />
                  <Route exact path="/SearchResults" component={SearchResults} />
                  {/* <Route component={NoMatch} /> */}
                </Switch>
              {/* </StoreProvider> */}
            </div>
            <Footer />
          </Router>
        {/* </ApolloProvider> */}
        </div>
  );
}

const Home = () => (
  <div>
    <h4 className="center">Welcome. This is a description of the website</h4>
  </div>
);


export default App;
