import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { MdAddShoppingCart } from "react-icons/md";
const style = { color: "white", size:"50px" };
const navStyle = {color: "black" };


function NavBar(props) {

  //make sure links to are exact path
  return (
    <div>
    <Nav className= "navbar justify-content-center" >
      <ul id="nav-mobile" className="nav-links">

        <Link to="/Home"><h3 className="nav-text">Home</h3></Link>

        <Link to="/LogIn"><h3 className="nav-text">Log In</h3></Link>

        <Link to="/SignUp"><h3 className="nav-text">Sign Up</h3></Link>

        <Link to="/GoPremium"><h3 className="nav-text">Go Premium</h3></Link>
        
      
      </ul>
      </Nav>
      <MdAddShoppingCart style={style} />

    </div>
    
  );
}

export default NavBar;