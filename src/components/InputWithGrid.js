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
    // }else if
    // (this.props.element === "newCohortName"){
    //  this.props.storeNewCohortName(event.target.value);
    }else if
    (this.props.element === "newCohortNumber"){
      this.props.storeNewCohortNumber(event.target.value);
    }else if
    (this.props.element === "newCohortName"){
      this.props.storeNewCohortName(event.target.value);
    }else if
    (this.props.element === "newCohortRepoName"){
      this.props.storeNewCohortRepoName(event.target.value);
    // }else if
    // (this.props.element === "newCohortClassStartDate"){
    //   this.props.storeNewCohortClassStartDate(event.target.value);
    // }else if
    // (this.props.element === "newCohortClassEndDate"){
    //   this.props.storeNewCohortClassEndDate(event.target.value);
    // }else if
    // (this.props.element === "newCohortIntStartDate"){
    //   this.props.storeNewCohortIntStartDate(event.target.value);
    // }else if
    // (this.props.element === "newCohortIntEndDate"){
    //   this.props.storeNewCohortIntEndDate(event.target.value);
    // }else if
    // (this.props.element === "newCohortGradDate"){
    //   this.props.storeNewCohortGradDate(event.target.value);
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

// function mapStateToProps(state) {
//     return {
//     // classroomName: state.newClassroomName,

//     // CohortNumber: 0,
//     // CohortName: state.newCohortName,
//     // CohortRepoName: state.newCohortRepoName,
//     // CohortClassStartDate: state.newCohortClassStartDate,
//     // CohortClassEndDate: state.newCohortClassEndDate,
//     // CohortInternshipStartDate: state.newCohortInternshipStartDate,
//     // CohortInternshipEndDate: state.newCohortInternshipEndDate,
//     // CohortGraduationDate: state.newCohortGraduationDate,
//     }
// }

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
          storeNewCohortGradDate
        }, dispatch)
}

export default connect(null, mapDispatchToProps)(InputWithGrid);
