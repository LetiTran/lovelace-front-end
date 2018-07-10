import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import MarkdownFeedback from "../components/MarkdownFeedback";


class Homepage extends Component {
  render() {
     return (
      <Paper>
        Hello, Homepage!
        Put a dashboard view with calendar etc.
      </Paper> 
    );
  }
}

export default Homepage;