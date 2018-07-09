import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import LinkToButton from './LinkToButton.js'
// import indexRoutes from '../routes/index.js'
import Button from '@material-ui/core/Button';

class Login extends Component {

  render() {

    const Welcome = (
      <Button size="small">Please Login!</Button> 
    )

    // checkUser = () => {

    // }

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