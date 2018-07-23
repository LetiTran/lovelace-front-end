import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addInviteListStudents} from '../actions';

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
      
        <Card  style={{ margin:3}} >
        <Typography  variant="headline"  style={{margin:"25px", marginBottom:"0px"}}>
            {text}
          </Typography>
        </Card>
       
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
        addedStudentsForInvites: state.addedStudentsForInvites
    }
}

// function mapDispatchToProps(dispatch){
//     // return bindActionCreators({addInviteListStudents}, dispatch)
// }

export default connect(mapStateToProps, null)(AddHeadlineToUserInvites);
