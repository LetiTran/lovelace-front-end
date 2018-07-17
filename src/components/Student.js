import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// For Styles:
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class Student extends Component {

  render() {
    return (
      <TableRow>
        <TableCell onClick={this.props.onClick}> {this.props.name}</TableCell>
        <TableCell> Put Cohort </TableCell> 
        <TableCell>{this.props.classroom}</TableCell>
        <TableCell>{this.props.githubName}</TableCell>
        <TableCell>{this.props.email}</TableCell>
      </TableRow>
    )
  }
}

Student.propTypes = {
  // TODO: write proTypes....
}

export default Student;
