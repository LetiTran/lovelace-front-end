import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addNamesToInviteList} from '../actions';

// For Styles:
import { 
Card,
// TextField,
Typography
} from '../components-info/MaterialUiImports'

class AddHeadlineToUserInvites extends Component {
  
  render() {
    
    let text = "Please Select Classroom for Creating User Invites"
    let thisClassroom = this.props.classroomList.filter((classroom) => {
        return classroom.id === this.props.selectedClassroomOnForm
    })

    let thisCohort = this.props.cohortList.filter((classroom) => {
        return classroom.id === this.props.selectedCohortOnForm
    })

    if(thisClassroom[0] && thisCohort[0]){
        thisClassroom = thisClassroom[0].name
        thisCohort = thisCohort[0].name
        text = "Add User Invites for " + thisCohort + " and " + thisClassroom
    }
    

    return (
        <h5  style={{margin:"25px", marginBottom:"0px", textAlign: "center", paddingBottom:"20px"}} >
            {text}
          </h5>
    )
  }
}

AddHeadlineToUserInvites.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
    return {
        selectedCohortOnForm: state.selectedCohortOnForm,
        selectedClassroomOnForm: state.selectedClassroomOnForm,
        classroomList: state.classroomList,
        cohortList: state.cohortList,
        addedNamesForInvites: state.addedNamesForInvites
    }
}

// function mapDispatchToProps(dispatch){
//     // return bindActionCreators({addNamesToInviteList}, dispatch)
// }

export default connect(mapStateToProps, null)(AddHeadlineToUserInvites);
