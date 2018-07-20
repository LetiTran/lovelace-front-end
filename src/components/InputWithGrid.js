import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  storeNewClassroomName,
  storeNewCohortName,
  storeNewCohortNumber,
  storeNewCohortRepoName,
  storeNewCohortClassStartDate,
  storeNewCohortClassEndDate,
  storeNewCohortIntStartDate,
  storeNewCohortIntEndDate,
  storeNewCohortGradDate,
  storeNewInstructorName,
  storeNewInstructorGithubName
} from '../actions';

import {
    Grid,
    TextField
} from '../components-info/MaterialUiImports'

class InputWithGrid extends Component {

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
          storeNewCohortClassStartDate,
          storeNewCohortClassEndDate,
          storeNewCohortIntStartDate,
          storeNewCohortIntEndDate,
          storeNewCohortGradDate,
          storeNewInstructorName,
          storeNewInstructorGithubName,
        }, dispatch)
}

export default connect(null, mapDispatchToProps)(InputWithGrid);
