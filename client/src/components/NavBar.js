
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { MdAddShoppingCart } from "react-icons/md";
import React, { useState, useEffect } from "react";
import User from '../'
import {
  Jumbotron,
  Col,
  Row,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import Auth from "../utils/auth";
import UserLoggedIn from '../pages/UserLoggedIn';
const style = { color: "white", size:"50px" };
const navStyle = {color: "black" };

function NavBar(props) {

  //make sure links to are exact path
  return (
    <div>
    <Nav className= "navbar justify-content-center" >
      <ul id="nav-mobile" className="nav-links">

        <Link to="/"><h3 className="nav-text">Home</h3></Link>

        <Link to="/Search"><h3 className="nav-text">Search</h3></Link>

        <Link to="/LogIn"><h3 className="nav-text">Log In</h3></Link>

        <Link to="/SignUp"><h3 className="nav-text">Sign Up</h3></Link>

        <Link to="/GoPremium"><h3 className="nav-text">Go Premium</h3></Link>
        
        {Auth.loggedIn() && (<Link to="/MyLists"><h3 className="nav-text">My Lists</h3></Link>)}

        {Auth.loggedIn() && (<h6 className="right">Welcome back {(Auth.username)}</h6>)}
      </ul>
      </Nav>
      <MdAddShoppingCart style={style} />

    </div>
    
  );
}

export default NavBar;
