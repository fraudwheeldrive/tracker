import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from '../utils/auth';

const UserLoggedIn = props => {
    return (
<div>
    <h1>User is logged in</h1>
</div>



    )
}

export default UserLoggedIn;