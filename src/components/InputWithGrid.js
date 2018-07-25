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


  assignLabel = () => {

    let label = null;

    if
    (this.props.element === "newClassroomName") {
      return label = (this.props.selectedtClassroomToUpdate.name ? this.props.selectedtClassroomToUpdate.name : this.props.name)
   }else if
    (this.props.element === "newCohortNumber"){
      return label = (this.props.selectedtCohortToUpdate ? this.props.selectedtCohortToUpdate.number : this.props.name)
    }else if
    (this.props.element === "newCohortName"){
      return label = (this.props.selectedtCohortToUpdate ? this.props.selectedtCohortToUpdate.name : this.props.name)
    }else if
    (this.props.element === "newCohortRepoName"){
      return label = (this.props.selectedtCohortToUpdate ? this.props.selectedtCohortToUpdate.repo_name : this.props.name)
    }else if
    (this.props.element === "newInstructorName"){
      return label = (this.props.newInstructorName ? this.props.selectedtInstructorToUpdate.name : this.props.name)
    }else if
    (this.props.element === "newInstructorGithubName"){
      return label = (this.props.newInstructorGithubName ? this.props.selectedtInstructorToUpdate.github_name : this.props.name)
    }else if
    (this.props.element === "updateCohortNumber"){
      return label = (this.props.selectedtCohortToUpdate ? this.props.selectedtCohortToUpdate.number : this.props.name)
    }else if
    (this.props.element === "updateCohortName"){
      return label = (this.props.selectedtCohortToUpdate ? this.props.selectedtCohortToUpdate.name : this.props.name)
    }else if
    (this.props.element === "updateCohortRepoName"){
      return label = (this.props.selectedtCohortToUpdate ? this.props.selectedtCohortToUpdate.repo_name : this.props.name)
    }else if
    (this.props.element === "updateStudentName"){
      return label = (this.props.selectedtStudentToUpdate ? this.props.selectedtStudentToUpdate.name : this.props.name)
    }else if
    (this.props.element === "updateGithubName"){
      return label = (this.props.selectedtStudentToUpdate ? this.props.selectedtStudentToUpdate.github_name : this.props.name)
    }else if
    (this.props.element === "updateStudentEmail"){
      return label = (this.props.selectedtStudentToUpdate ? this.props.selectedtStudentToUpdate.email : this.props.name)
    }else if
    (this.props.element === "updateStudentPreferredName"){
      return label = (this.props.selectedtStudentToUpdate ? this.props.selectedtStudentToUpdate.preferred_name : this.props.name)
    }else if
    (this.props.element === "newAssignmentName"){
      return label = (this.props.selectedAssignmentonForm ? this.props.selectedAssignmentonForm.name : this.props.name)
    }else if
    (this.props.element === "newAssignmentRepoUrl"){
      return label = (this.props.selectedAssignmentonForm ? this.props.selectedAssignmentonForm.repo_url : this.props.name)
    }

  }

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
  //  {this.props.selectedAssignmentonForm ? this.props.selectedAssignmentonForm.name : this.props.name}
  render() {
    return (
            <Grid container spacing={8} alignItems="flex-end">
            <Grid md item>
                <TextField onChange={this.handleChange} fullWidth={true} label={this.assignLabel()} />
            </Grid>
            </Grid>
    );
  }
}


function mapStateToProps(state) {
  return {
    selectedAssignmentonForm: state.selectedAssignmentonForm,
    selectedSubmission: state.selectedSubmission,
    selectedtStudentToUpdate: state.selectedtStudentToUpdate,
    selectedtCohortToUpdate: state.selectedtCohortToUpdate,
    selectedtClassroomToUpdate: state.selectedtClassroomToUpdate,
    selectedtInstructorToUpdate: state.selectedtInstructorToUpdate,
    newInstructorName: state.newInstructorName,
    newInstructorGithubName: state.newInstructorGithubName,
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

export default connect(mapStateToProps, mapDispatchToProps)(InputWithGrid);
