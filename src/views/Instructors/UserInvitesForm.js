import React, { Component } from 'react';
import SelectCohortForm from "../../components/SelectCohortForm";
import SelectClassroomForm from "../../components/SelectClassroomForm";
import AddStudentsToUserInvites from "../../components/AddStudentsToUserInvites";
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import {createUserInvites} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addInviteListStudents} from '../actions';


import { 
    Grid, 
    Button,
    // SendIcon
   } from '../../components-info/MaterialUiImports'

class UserInvitesForm extends Component {

    createUserInvites = () => {
    const data = {  
        // cohort: this.props.selectedCohortOnForm,
        classroom_id: this.props.selectedClassroomOnForm,
        github_names: this.props.addedStudentsForInvites,
        role: 'student'
        // add role
    }

    this.props.createUserInvites(data)
//     
//     
//     //   TODO: put function that will call the api post request here
  };


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
        <section>
        <Grid spacing={16} container direction="row" justify="center">
            <Grid item>
                <SelectCohortForm buttonName="Create New Cohort" title="Please fill out new Cohort details" infoNeeded={cohortInfo}/>
            </Grid>
            <Grid item >
                <SelectClassroomForm buttonName="Create New Class" title="Please fill out new Class details" infoNeeded={classroomInfo}/>
           </Grid>
         </Grid>
        <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
            <Grid  xs={8} item >
                <AddStudentsToUserInvites />
            </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <Button onClick={this.createUserInvites} style={{width:"300px"}} variant="contained" color="primary" >
                 Send {/*<SendIcon />  */}
            </Button>
        </Grid>
        </section>
    );
  }
}

function mapStateToProps(state) {
    return {
        selectedCohortOnForm: state.selectedCohortOnForm,
        selectedClassroomOnForm: state.selectedClassroomOnForm,
        addedStudentsForInvites: state.addedStudentsForInvites,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({createUserInvites}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInvitesForm);


