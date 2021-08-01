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
const style = { color: "white", size: "50px" };
const navStyle = { color: "black" };

function MyLists(props) {
    //make sure links to are exact path

    const isLoggedIn = Auth.loggedIn();
    if (isLoggedIn)
        return (<div className="box-center">
            <h1>Logged in</h1>
            <h2>Saved Lists</h2>
        </div>
        );

    return (<div><h1>Please log in to see your lists</h1></div>);





    //   return (
    //     <div>
    //         
    //         {/* {Auth.loggedIn() && (<h6 className="right">Welcome back!</h6>)} */}

    //     </div>

    //   );
}

export default MyLists;