import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ListItem from "@material-ui/core/es/ListItem/ListItem";

class Student extends Component {

  render() {
    return (
        <tr>
            {/* <ListItem onClick={this.props.onClick}> */}
               <td onClick={this.props.onClick}>{this.props.name} </td>
               <td> {this.props.classroom} </td>
               <td> {this.props.classroom} </td>
               <td> {this.props.githubName} </td>
               <td> {this.props.email} </td>
            {/* </ListItem> */}
        </tr>
    )
  }
}

Student.propTypes = {
}

export default Student;
