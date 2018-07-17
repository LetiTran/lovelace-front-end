import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Classroom from '../components/Classroom.js'


class Homepage extends Component {
  render() {
     return (
      <Paper>
        Hello, Homepage!
        Put a dashboard view with calendar etc.
        <Classroom />
      </Paper> 
      

    );
  }
}

export default Homepage;