import React from "react";
import { Link } from "react-router-dom";

function SignUp(props) {

//make sure links to are exact path
  return (
    <form>
    <h2>Sign Up</h2>
    <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
    </div>

    <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
    </div>

    <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>

    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
</form>
  );
}

export default SignUp;