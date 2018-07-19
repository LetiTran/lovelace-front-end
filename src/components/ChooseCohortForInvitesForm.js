import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCohortOnForm, changeClassroomOnForm, changeCohortOnFormForNewClassroom} from '../actions';

import { InputLabel, 
  MenuItem, 
  FormControl, 
  Select,
  Typography
 } from '../components-info/MaterialUiImports'
 

class ChooseCohortForInvitesForm extends Component {

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
   if(this.props.funcName === "chooseCohortForNewClassroom") {
    this.props.changeCohortOnFormForNewClassroom(event.target.value)
   }else if(this.props.funcName === "chooseClassroomForInvitesForm"){
    this.props.changeClassroomOnForm(event.target.value)
   }else{
    this.props.changeCohortOnForm(event.target.value)
   }
    
  };

  loadList = () => {
    if(this.props.selectValue === "cohort"){
     return this.renderCohortList() 
    }else{
     return this.renderClassroomList()
    }
  }    


  render() {

    const cohort = this.props.cohort;
    const classroom = this.props.classroom;

    const alignment = (this.props.titleSize === "insideForm" ? 'left' : 'center')
    const titleSize = (this.props.titleSize === "insideForm" ? 'caption' : 'headline')
    const marginTop = (this.props.titleSize === "insideForm" ? '25px' : '')
    const titleText =  this.props.titleText
    const selectValue = (this.props.selectValue === "cohort" ? cohort : classroom)


   

    return (
      <section style={{textAlign:alignment}}>
        <Typography  variant={titleSize}  style={{marginTop:marginTop}}>
            {titleText}
          </Typography>
        <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-cohortOrClassroom"></InputLabel>
          <Select
            value={selectValue}
            onChange={this.handleChange}
            inputProps={{
              name: `${this.props.selectValue}`,
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
  console.log('function mapStateToProps:' )
    return {
    cohortList: state.cohortList,
    classroom: state.selectedClassroomOnForm,
    cohort: state.selectedCohortOnForm,
    classroomList: state.classroomList
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeClassroomOnForm, changeCohortOnForm, changeCohortOnFormForNewClassroom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCohortForInvitesForm);
