import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import LinkToButton from './LinkToButton.js'
// import indexRoutes from '../routes/index.js'
import Homepage from '../views/homepage.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Login extends Component {
   
      render() {
        return (
      <div>
        <h2>Please Login!</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <Route exact path="/homepage" component={Homepage}/>
        

      </div>
    );
  }
}

export default Login;