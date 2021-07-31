import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { MdAddShoppingCart } from "react-icons/md";
import React, { useState, useEffect } from "react";
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

function MyLists(props) {

  //make sure links to are exact path
  return (
    <div>
        <h2>This is the lists page</h2>
    </div>
    
  );
}

export default MyLists;