import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCohortOnForm, changeCohortOnFormForNewClassroom} from '../actions';

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

 handleChange = (event) => {
   if(this.props.funcName === "chooseCohortForNewClassroom") {
    this.props.changeCohortOnFormForNewClassroom(event.target.value)
   }else{
    this.props.changeCohortOnForm(event.target.value)
   }
    
  };

  render() {
    console.log('cohort: ' + this.props.cohort)

    const cohort = this.props.cohort;

    // {this.props.titleSize === "insideForm" ? 'h1' : 'h6'}
    // variant="headline"
    const alignment = (this.props.titleSize === "insideForm" ? 'left' : 'center')
    const titleSize = (this.props.titleSize === "insideForm" ? 'caption' : 'headline')
    const marginTop = (this.props.titleSize === "insideForm" ? '25px' : '')
    const titleText =  (this.props.titleSize === "insideForm" ? 'Select Cohort For New Classroom:' : 'Select Cohort')
    return (
      <section style={{textAlign:alignment}}>
        <Typography  variant={titleSize}  style={{marginTop:marginTop}}>
            {titleText}
          </Typography>
        <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-cohort"></InputLabel>
          <Select
            value={cohort}
            onChange={this.handleChange}
            inputProps={{
              name: 'cohort',
              id: 'change-cohort',
            }}
          >
            {this.renderCohortList()}
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
    cohortList: state.cohortList
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeCohortOnForm, changeCohortOnFormForNewClassroom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCohortForInvitesForm);
