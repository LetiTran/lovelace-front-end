import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/es/ListItem/ListItem";

class Student extends Component {

  render() {
    return (
        <section>
            <ListItem onClick={this.props.onClick}>
                {this.props.name}
            </ListItem>
        </section>
    )
  }
}

Student.propTypes = {
}

export default Student;
