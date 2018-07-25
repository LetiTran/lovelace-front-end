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
    // console.log(    this.props.forceUpdateCallBack
    // )
    // console.log(event.target.value)
    // this.props.forceUpdateCallBack
    this.props.addStudentToGroup(this.props.element)
    // this.props.forceUpdateCallBack
  }



  render() {
    return (
        <ListItem>
        <ListItemText
          primary={this.props.name}
        />
        <ListItemSecondaryAction>
          <IconButton  aria-label="Add" onClick={this.addStudentToGroup}>
            <p style={{fontSize:"0.5em", color:"green"}}>ADD</p>
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
    currentClassroomStudentsToAddToGroupd: state.currentClassroomStudentsToAddToGroupd
  }
}


function mapDispatchToProps(dispatch){
      return bindActionCreators({ addStudentToGroup }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AddStudentToGroup);


