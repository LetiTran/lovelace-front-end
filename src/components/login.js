import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Login extends Component {

  render() {

    const Welcome = (
      <Button size="small">Welcome Back Demo User!</Button> 
    )

    return (
      <div>
         {Welcome}
             {/* github loggin button
              OR
             Show Welcome PersonName instead if already logged in */}
      </div>
    );
  }
}

export default Login;