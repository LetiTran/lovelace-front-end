import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveStudentnewClassroom,changeCurrentClassroom, changeCurrentCohort, changeCohortOnForm, changeClassroomOnForm, changeCohortOnFormForNewClassroom} from '../actions';

import { InputLabel, 
  MenuItem, 
  FormControl, 
  Select,
  Typography
 } from '../components-info/MaterialUiImports'
 

class ChooseCohortOrClassForm extends Component {

  renderCohortList = () => {
    return this.props.cohortList.map((cohort, index) => {
       return (
       <MenuItem key={index} value={cohort.id}> {cohort.name} </MenuItem>
       );
   });
}


renderClassroomList = () => {
  return this.props.classroomList.map((classroom, index) => {
     return (
     <MenuItem key={index} value={classroom.id}> {classroom.name} </MenuItem>
     );
 });
}


 handleChange = (event) => {
   if
   (this.props.funcName === "chooseCohortForNewClassroom") {
    this.props.changeCohortOnFormForNewClassroom(event.target.value)
   }else if
   (this.props.funcName === "chooseClassroomForInvitesForm"){
    this.props.changeClassroomOnForm(event.target.value)
   }else if
   (this.props.funcName === "chooseCurrentCohort"){
    this.props.changeCurrentCohort(event.target.value)
   }else if
   (this.props.funcName === "chooseCurrentClassroom"){
    this.props.changeCurrentClassroom(event.target.value)
   }else if
   (this.props.funcName === "chooseCohortForInvitesForm"){
    this.props.changeCohortOnForm(event.target.value)
   }else if 
   (this.props.funcName === "chooseClassroomForUpdatingStudent"){
     return this.props.saveStudentnewClassroom(event.target.value);
   }
    
  };

  loadList = () => {
    if
    (this.props.selectValue === "cohort"){
     return this.renderCohortList() 
    }else{
     return this.renderClassroomList()
    }
  }    

  // assignVariables = () => {
  //   // let cohort = this.props.currentCohort;
  //   // let classroom = this.props.currentClassroom;

  //   if(this.props.funcName === "chooseCohortForNewClassroom") {
  //     return this.props.selectedCohort;
  //    }else if(this.props.funcName === "chooseClassroomForInvitesForm"){
  //     return = this.props.selectedclassroom;
  //    }else if
  //    (this.props.funcName === "chooseCurrentCohort"){
  //     return this.props.currentCohort
  //    }else if
  //    (this.props.funcName === "chooseCurrentClassroom"){
  //     return = this.props.currentClassroom;
  //    }else if
  //    (this.props.funcName === "chooseCohortForInvitesForm"){
  //     return this.props.selectedCohort;
  //    }
  //   };

  render() {


    const assignVariables = () => {
      // let cohort = this.props.currentCohort;
      // let classroom = this.props.currentClassroom;
  
      if(this.props.funcName === "chooseCohortForNewClassroom") {
        return this.props.selectedCohort;
       }else if(this.props.funcName === "chooseClassroomForInvitesForm"){
        return this.props.selectedClassroom;
       }else if
       (this.props.funcName === "chooseCurrentCohort"){
        return this.props.currentCohort
       }else if
       (this.props.funcName === "chooseCurrentClassroom"){
        return this.props.currentClassroom;
       }else if
       (this.props.funcName === "chooseCohortForInvitesForm"){
        return this.props.selectedCohort;
       }else if 
       (this.props.funcName === "chooseClassroomForUpdatingStudent"){
         return this.props.updateStudentClassroom;
       }
      };
    
    const alignment = (this.props.titleSize === "insideForm" ? 'left' : 'center')
    const titleSize = (this.props.titleSize === "insideForm" ? 'caption' : 'headline')
    const marginTop = (this.props.titleSize === "insideForm" ? '25px' : '')
    const titleText =  this.props.titleText
    const selectValue = assignVariables()

    return (
      <section style={{textAlign:alignment}}>
        <Typography  variant={titleSize}  style={{marginTop:marginTop}}>
            {titleText}
          </Typography>
        <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-cohortOrClassroom"></InputLabel>
          <Select
          style={{width: "120px"}}
            value={selectValue}
            onChange={this.handleChange}
            inputProps={{
              name: `change`,
              id: 'change-'+`${this.props.selectValue}`,
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
    cohortList: state.cohortList,
    classroomList: state.classroomList,

    selectedClassroom: state.selectedClassroomOnForm,
    selectedCohort: state.selectedCohortOnForm,
    
    currentCohort: state.currentCohort,
    currentClassroom: state.currentClassroom,

    updateStudentClassroom: state.updateStudentClassroom
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({saveStudentnewClassroom,changeCurrentClassroom, changeCurrentCohort, changeClassroomOnForm, changeCohortOnForm, changeCohortOnFormForNewClassroom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCohortOrClassForm);
