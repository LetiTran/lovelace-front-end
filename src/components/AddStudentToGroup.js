import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addStudentToGroup } from '../actions';

// For Styles:
 import { 
    ListItem,
    ListItemText, 
    IconButton, 
    ListItemSecondaryAction
} from '../components-info/MaterialUiImports'


class AddStudentToGroup extends Component {

  addStudentToGroup = (event) => {
    // console.log('value')
    // console.log(event.target.value)
    this.props.addStudentToGroup(this.props.element)
  }

  render() {
    return (
        <ListItem>
        <ListItemText
          primary={this.props.name}
        />
        <ListItemSecondaryAction>
          <IconButton  aria-label="Add" onClick={this.addStudentToGroup}>
            <p style={{fontSize:"0.5em"}}>Add</p>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>


    //   <TableRow>
    //     <TableCell onClick={this.handleClickOpen('paper')}>{this.props.name}</TableCell>
    //   </TableRow>

       
    )
  }
}

AddStudentToGroup.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
  return {
  // classroomName: state.currentClassroom.name
  }
}


function mapDispatchToProps(dispatch){
      return bindActionCreators({ addStudentToGroup }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AddStudentToGroup);


