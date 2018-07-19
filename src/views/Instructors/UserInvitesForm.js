import React, { Component } from 'react';
import SelectCohortForm from "../../components/SelectCohortForm";
// import PropTypes from 'prop-types';

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

    return (
        <section>
           <SelectCohortForm buttonName="Create New Cohort" title="Please fill out new Cohort details" infoNeeded={cohortInfo}/>
         </section>
    );
  }
}

export default UserInvitesForm;

