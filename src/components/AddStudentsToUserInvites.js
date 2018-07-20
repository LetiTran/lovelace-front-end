import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {createUserInvites} from '../actions';

// For Styles:
import { 
Card,
TextField,
Typography
} from '../components-info/MaterialUiImports'

class AddStudentsToUserInvites extends Component {

  createUserInvites = () => {
    const data = {  

    }
    // this.props.createUserInvites(data)
    this.handleClose();
    //   TODO: put function that will call the api post request here
  };

  
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
         <TextField
         style={{marginLeft:"30px", marginRight:"30px", width:"80%", height:"300px"}}
          id="multiline-static"
          label="GitHub Names (separate names by line-breaks if creating multiple invites)"
          multiline
          rows="54"
          defaultValue=""
        //   className={classes.textField}
          margin="normal"
        />
        </Card>
       
    )
  }
}

AddStudentsToUserInvites.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
    return {
        selectedCohortOnForm: state.selectedCohortOnForm,
        selectedClassroomOnForm: state.selectedClassroomOnForm,
        classroomList: state.classroomList,
        cohortList: state.cohortList
    }
}

function mapDispatchToProps(dispatch){
    // return bindActionCreators({createUserInvites}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentsToUserInvites);
