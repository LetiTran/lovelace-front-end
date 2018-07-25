import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeCurrentSelectedAssignment, SelectedAssignmentonForm} from '../actions';

import { InputLabel, 
  MenuItem, 
  FormControl, 
  Select,
  Typography,
 } from '../components-info/MaterialUiImports'
 

class SelectAssignmentDropDown extends Component {

    renderAssignmentsList = () => {
        return this.props.assignmentList.map((assignment, index) => {
            return (
            <MenuItem key={index} value={assignment}> {assignment.name} </MenuItem>
            );
        });
    }

 handleChange = (event) => {
    this.props.changeCurrentSelectedAssignment(event.target.value)  
  };

  loadList = () => {
     return this.renderAssignmentsList()
    
  }    

  render() {
    return (
      <section style={{textAlign:"center"}}>
        <Typography  variant="subheading"  style={{marginTop:"10px"}}>
            Select Assignment
          </Typography>
        <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-assignment"></InputLabel>
          <Select
          style={{minWidth: "300px"}}
            value={this.props.SelectedAssignmentonForm ? this.props.SelectedAssignmentonForm.name : ""}
            onChange={this.handleChange}
            inputProps={{
              name: `change`,
              id: 'change-assignment',
            }}
          >
          {this.loadList()}
          </Select>
        </FormControl>
        </form>

      </section>
    );
  }
}

function mapStateToProps(state) {
    return {
    // cohortList: state.cohortList,
    // classroomList: state.classroomList,

    // selectedClassroom: state.selectedClassroomOnForm,
    // selectedCohort: state.selectedCohortOnForm,
    
    currentCohort: state.currentCohort,
    currentClassroom: state.currentClassroom,
     
    assignmentList: state.assignmentList,
    selectedAssignmentonForm: state.selectedAssignmentonForm
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({ changeCurrentSelectedAssignment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAssignmentDropDown);
