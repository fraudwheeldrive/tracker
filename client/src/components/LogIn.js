import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import UserLoggedIn from '../pages/UserLoggedIn';
import Auth from '../utils/auth';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';

const Login = props => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
      Auth.login(data.login.token);
      ReactDOM.render(
        <React.StrictMode>
        <UserLoggedIn />
        </React.StrictMode>
      )
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''
    });
  };


      </div>
    </main>
  );
};

export default Login;