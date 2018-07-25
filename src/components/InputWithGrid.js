import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  storeNewClassroomName,
  storeNewCohortName,
  storeNewCohortNumber,
  storeNewCohortRepoName,
  storeNewInstructorName,
  storeNewInstructorGithubName,

  editCohortName,
  editCohortNumber,
  editCohortRepoName,

  editStudentName,
  editStudentGithubName,
  editStudentPreferredName,
  editStudentEmail,

  storeNewAssignmentName,
  storeNewAssignmentRepoUrl
} from '../actions';

import {
    Grid,
    TextField
} from '../components-info/MaterialUiImports'

class InputWithGrid extends Component {

  // TODO: Make it a Switch-case function instead
  handleChange = (event) => {
    if
    (this.props.element === "newClassroomName") {
      this.props.storeNewClassroomName(event.target.value);
   }else if
    (this.props.element === "newCohortNumber"){
      this.props.storeNewCohortNumber(event.target.value);
    }else if
    (this.props.element === "newCohortName"){
      this.props.storeNewCohortName(event.target.value);
    }else if
    (this.props.element === "newCohortRepoName"){
      this.props.storeNewCohortRepoName(event.target.value);
    }else if
    (this.props.element === "newInstructorName"){
      this.props.storeNewInstructorName(event.target.value);
    }else if
    (this.props.element === "newInstructorGithubName"){
      this.props.storeNewInstructorGithubName(event.target.value);
    }else if
    (this.props.element === "updateCohortNumber"){
      this.props.editCohortNumber(event.target.value);
    }else if
    (this.props.element === "updateCohortName"){
      this.props.editCohortName(event.target.value);
    }else if
    (this.props.element === "updateCohortRepoName"){
      this.props.editCohortRepoName(event.target.value);
    }else if
    (this.props.element === "updateStudentName"){
      this.props.editStudentName(event.target.value);
    }else if
    (this.props.element === "updateGithubName"){
      this.props.editStudentGithubName(event.target.value);
    }else if
    (this.props.element === "updateStudentEmail"){
      this.props.editStudentEmail(event.target.value);
    }else if
    (this.props.element === "updateStudentPreferredName"){
      this.props.editStudentPreferredName(event.target.value);
    }else if
    (this.props.element === "newAssignmentName"){
      this.props.storeNewAssignmentName(event.target.value);
    }else if
    (this.props.element === "newAssignmentRepoUrl"){
      this.props.storeNewAssignmentRepoUrl(event.target.value);
    }
     
   };

  render() {
    return (
            <Grid container spacing={8} alignItems="flex-end">
            <Grid md item>
                <TextField onChange={this.handleChange} fullWidth={true} label={this.props.name} />
            </Grid>
            </Grid>
    );
  }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({ 
          storeNewClassroomName,
          storeNewCohortName,
          storeNewCohortNumber,
          storeNewCohortRepoName,
          storeNewInstructorName,
          storeNewInstructorGithubName,

          editCohortName,
          editCohortNumber,
          editCohortRepoName,

          editStudentName,
          editStudentGithubName,
          editStudentPreferredName,
          editStudentEmail,

          storeNewAssignmentName,
          storeNewAssignmentRepoUrl

        }, dispatch)
}

export default connect(null, mapDispatchToProps)(InputWithGrid);
