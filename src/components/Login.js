import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import LinkToButton from './LinkToButton.js'
// import indexRoutes from '../routes/index.js'
import Button from '@material-ui/core/Button';

class Login extends Component {
  componentWillMount

  render() {
    const Welcome = (
      <Button
          variant="contained"
          color="primary"
          // onClick={this.props.}
      >
        Please Login!
      </Button>
    );

    return (
      <div>
         {Welcome}
      </div>
    );
  }
}

export default Login;