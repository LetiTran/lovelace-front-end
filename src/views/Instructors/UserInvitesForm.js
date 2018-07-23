import React, { Component } from 'react';
import SelectCohortForm from "../../components/SelectCohortForm";
import SelectClassroomForm from "../../components/SelectClassroomForm";
import AddHeadlineToUserInvites from "../../components/AddStudentsToUserInvites";
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import {createUserInvites} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addInviteListStudents} from '../actions';
import RadioButtonsGroup from '../../components/RadioButton.js'
import {addInviteListStudents} from '../../actions';

import { 
    Grid, 
    Button,
    
Card,
TextField,
   } from '../../components-info/MaterialUiImports'

class UserInvitesForm extends Component {

    state = {
        inviteStudents: true,
      };

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

 
  changeInviteType =()=> {
       this.setState(
           {inviteStudents: !(this.state.inviteStudents)}
       )
  }
 
  handleChange = (event) => {
    this.props.addInviteListStudents(event.target.value)
}

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

    const StudentInvite = () => {
        return (
            <Grid spacing={16} container direction="row" justify="center">
                <Grid item>
                    <SelectCohortForm buttonName="Create New Cohort" title="Please fill out new Cohort details" infoNeeded={cohortInfo}/>
                </Grid>
                <Grid item >
                    <SelectClassroomForm buttonName="Create New Class" title="Please fill out new Class details" infoNeeded={classroomInfo}/>
                </Grid>
            </Grid>
        )
    }

    const AddHeadline = () => {
       return ( 
           <section>
                <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
                    <Grid  xs={8} item >
                        <AddHeadlineToUserInvites />
                    </Grid>
                </Grid>
                
            </section>
        )
    }    

    const DisplayCohortAndClass = () => {
        if(this.state.inviteStudents){
            return (
                <div>
                    <StudentInvite />
                    <AddHeadline />
                </div>
            )
        }else{
            return(
                <AddHeadline />
            ) 
        }
    }

    const DisplayButton = () => {
        return(
            <Grid style={{margin:"30px"}} container justify="center">
            <Button onClick={this.createUserInvites} style={{width:"300px"}} variant="contained" color="primary" >
                Send 
            </Button>
        </Grid>
        )
    }

    return (
        <section>
            <RadioButtonsGroup displayFormCallBack={this.changeInviteType}/>
            <DisplayCohortAndClass />
            <Card  style={{ margin:3}} >
            <TextField
            style={{marginLeft:"30px", marginRight:"30px", width:"80%", height:"300px"}}
            id="multiline-static"
            label="GitHub Names (separate names by line-breaks if creating multiple invites)"
            multiline
            rows="54"
            defaultValue=""
            //   className={classes.textField}
            margin="normal"
            onChange={this.handleChange}
            />
            </Card>
            <DisplayButton />
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
    return bindActionCreators({createUserInvites, addInviteListStudents}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInvitesForm);

