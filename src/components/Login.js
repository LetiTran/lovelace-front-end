import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import GitHubLogin from 'react-github-login';

class Login extends Component {

  render() {

    const Welcome = (
        <GitHubLogin
            clientId='89f6bb7fff6f6582eb54'
            onSuccess = { response => console.log(response) }
            onFailure = { response => console.error(response) }
            redirectUri='http://localhost:3001/'
        />
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