import React, { Component } from 'react';
import SelectCohortForm from "../../components/SelectCohortForm";
import SelectClassroomForm from "../../components/SelectClassroomForm";

// import PropTypes from 'prop-types';

import { 
    Grid, 
   } from '../../components-info/MaterialUiImports'

class UserInvitesForm extends Component {

  render() {

    const cohortInfo = [
                    "Cohort Number",
                    "Name",
                    "Repo Name",
                    "Class Start Date",
                    "Class End Date",
                    "Internship Start Date",
                    "Internship End Date",
                    "Graduation Date" 
                    ]   
    const classroomInfo = [
        "Name"
        ]   

    return (
        <Grid spacing={16} container direction="row" justify="center">
            <Grid item>
                <SelectCohortForm buttonName="Create New Cohort" title="Please fill out new Cohort details" infoNeeded={cohortInfo}/>
            </Grid>
            <Grid item >
                <SelectClassroomForm buttonName="Create New Class" title="Please fill out new Class details" infoNeeded={classroomInfo}/>
           </Grid>
         </Grid>
    );
  }
}

export default UserInvitesForm;

