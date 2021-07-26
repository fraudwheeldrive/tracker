import logo from './logo.svg';

import './App.css';
import React from 'react';
import SignUp from "./components/SignUp";
import NavBar from "./components/Nav"
import LogIn from "./components/LogIn"
import Carousel from "./components/Carousel"
import GoPremium from "./components/GoPremium"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { StoreProvider } from "./utils/GlobalState";
import ApolloClient from 'apollo-boost';
import Home from './pages/Home'
import SearchBar from './components/SearchBar';





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
<<<<<<< HEAD
  return (
    <div className="renderApp">
      <ApolloProvider client={client}>
        <Router>
          <div>
            <StoreProvider>
              <NavBar />
=======

    return (
      <div className="renderApp">
        <ApolloProvider client={client}>
          <Router>
            <div>
              <StoreProvider>
                <NavBar />
                <SearchBar />
                <Home />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={LogIn} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/gopremium" component={GoPremium} />
                  <Route exact path="/carousel" component={Carousel} />
                  {/* <Route component={NoMatch} /> */}
                </Switch>
              </StoreProvider>
            </div>
            <Footer />
          </Router>
        </ApolloProvider>
      </div>
    );
  //   <div className="renderApp">
  //     <ApolloProvider client={client}>
  //       <Router>
  //         <div>
  //           <StoreProvider>
  //             <Nav />
>>>>>>> d61c3137ebf18141480a483dcd8e8cc771248bcc
              
  //             <SearchBar />
  //             <Switch>
  //               <Route exact path="/" component={Home} />
  //               <Route exact path="/login" component={LogIn} />
  //               <Route exact path="/signup" component={SignUp} />
  //               <Route exact path="/gopremium" component={GoPremium} />
  //               <Route exact path="/carousel" component={Carousel} />
  //               {/* <Route component={NoMatch} /> */}
  //             </Switch>
  //           </StoreProvider>
  //         </div>
  //         <Footer />
  //       </Router>
  //     </ApolloProvider>
  //   </div>
  // );
}




export default App;
