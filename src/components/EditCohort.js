import React, { Component } from 'react';
import {saveSelectedCohortforUpdating, updateCohort} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InputWithGrid from  './InputWithGrid';
import DatePickers from './DatePicker.js'

import { 
    Grid, 
    Button,
    Select,
    MenuItem,
    FormControl,
    
   } from '../components-info/MaterialUiImports'

import { FormLabel } from '../../node_modules/@material-ui/core';

class EditCohort extends Component {

    updateCohort = () => {
        console.log('got to postUpdate')
        const data = {  
            id: this.props.selectedtCohortToUpdate.id,
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
            <FormControl>
                <FormLabel>Cohort</FormLabel> 
                <Select
                 value={this.props.selectedtCohortToUpdate}
                 onChange={this.handleCohortChange}
                 inputProps={{
                 name: `change`,
                 id: 'change-Cohort',
                 }}>
                 {this.renderCohortsList()}
                </Select>
                </FormControl>
                </Grid>
                <Grid  xs={8} item >
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