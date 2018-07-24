import React, { Component } from 'react';
import {saveSelectedCohortforUpdating, updateCohort} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InputWithGrid from  '../../components/InputWithGrid';
import DatePickers from '../../components/DatePicker.js'

import { 
    Grid, 
    Button,
    Select,
    MenuItem,
   } from '../../components-info/MaterialUiImports'

class EditCohort extends Component {

    updateCohort = () => {
        console.log('got to postUpdate')
        const data = {  
            id: this.props.selectedtCohortToUpdate.id,
             number : this.props.updateCohortNumber,
             name : this.props.updateCohortName,
             repoName : this.props.updateCohortRepoName,
             classStartDate : this.props.updateCohortClassStartDate,
             classEndDate : this.props.updateCohortClassEndDate,
             internshipStartDate : this.props.updateCohortInternshipStartDate,
             internshipEndDate : this.props.updateCohortInternshipEndDate,
             graduationDate : this.props.updateCohortGraduationDate,
        }
        this.props.updateCohort(data)
    };

    handleCohortChange =(event) => {
        console.log(event.target.value)
        this.props.saveSelectedCohortforUpdating(event.target.value)
    }

    renderCohortsList =() => {
            return this.props.cohortList.map((cohort, index) => {
                return (
                <MenuItem key={index} value={cohort.id}> {cohort.name} </MenuItem>
                );
            });
    }

  render() {
    return (
        <section>
        <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
            <Grid  xs={8} item >
                <Select
                 value={this.props.selectedtCohortToUpdate}
                 onChange={this.handleCohortChange}
                 inputProps={{
                 name: `change`,
                 id: 'change-Cohort',
                 }}>
                 {this.renderCohortsList()}
                </Select>
                </Grid>
                <Grid  xs={8} item >
                <InputWithGrid  element="updateCohortNumber" name="Cohort Number"/>
                <InputWithGrid element="updateCohortName" name="Name"/>
                <InputWithGrid element="updateCohortRepoName" name="Repo Name"/>
                <DatePickers element="updateCohortClassStartDate" text="Class Start Date"/>   
                <DatePickers element="updateCohortClassEndDate" text="Class End Date"/>
                <DatePickers element="updateCohortIntStartDate" text="Internship Start Date"/>
                <DatePickers element="updateCohortIntEndDate" text="Internship End Date"/>
                <DatePickers element="updateCohortGradDate" text="Graduation Date"/>     
                </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <Button onClick={this.updateCohort} style={{width:"300px"}} variant="contained" color="primary" >
                 Update
            </Button>
        </Grid>
        </section>
    );
  }
}

function mapStateToProps(state) {
    return {
       selectedtCohortToUpdate: state.selectedtCohortToUpdate,
       cohortList : state.cohortList,
       updateCohortNumber: state.updateCohortNumber,
       updateCohortName: state.updateCohortName,
       updateCohortRepoName: state.updateCohortRepoName,
       updateCohortClassStartDate: state.updateCohortClassStartDate,
       updateCohortClassEndDate: state.updateCohortClassEndDate,
       updateCohortInternshipStartDate: state.updateCohortInternshipStartDate,
       updateCohortInternshipEndDate: state.updateCohortInternshipEndDate,
       updateCohortGraduationDate: state.updateCohortGraduationDate,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveSelectedCohortforUpdating, updateCohort}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCohort);