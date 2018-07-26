import React, { Component } from 'react';
import {saveSelectedStudentforUpdating, updateStudent} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InputWithGrid from  './InputWithGrid';
import ChooseCohortOrClassForm from './ChooseCohortOrClassForm';

import { 
    Grid, 
    Button,
    Select,
    MenuItem,
    FormControl
   } from '../components-info/MaterialUiImports'

import { FormLabel } from '../../node_modules/@material-ui/core';

class EditStudent extends Component {

    updateStudent = () => {
        console.log('got to postUpdate')
        const data = {  
            id:this.props.selectedtStudentToUpdate.id,
            name: this.props.updateStudentName,
            githubName: this.props.githubName,
            classroom: this.props.updateStudentClassroom,
            email: this.props.updateStudentEmail,
            preferredName:this.props.updateStudentPreferredName,
        }
        console.log('data:')
        console.log(data)
        this.props.updateStudent(data)
    };


    handleStudentChange =(event) => {
        console.log('handlechange')
        console.log(event.target.value)
        this.props.saveSelectedStudentforUpdating(event.target.value)
    }

    renderStudentsList =() => {
            return this.props.studentsList.map((student, index) => {
                return (
                <MenuItem key={index} value={student.id}> {student.name} </MenuItem>
                );
            });
    }

  render() {
    return (
        <section>
        <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
            <Grid  xs={8} item >
            <FormControl>
                <FormLabel>Student</FormLabel> 
            <Select
                value={this.props.selectedtStudentToUpdate}
                onChange={this.handleStudentChange}
                inputProps={{
                name: `change`,
                id: 'change-student',
                }}>
                {this.renderStudentsList()}
            </Select>
            </FormControl>
            </Grid>
            <Grid  xs={8} item >
            
            <FormControl>
                <FormLabel>Classroom</FormLabel> 
                <ChooseCohortOrClassForm titleSize="insideForm" funcName="chooseClassroomForUpdatingStudent"/>
            </FormControl>
            <InputWithGrid  element="updateStudentName" name="Student Name"/>
            <InputWithGrid  element="updateGithubName" name="Github Name"/>
            {/* <InputWithGrid element="updateStudentClassroom" name="Classroom"/>  */}
            {/* deal with drop-down classroom */}
            <InputWithGrid element="updateStudentEmail" name="Email"/>
            <InputWithGrid element="updateStudentPreferredName" name="PreferredName"/>
            </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <Button  onClick={this.updateStudent} style={{width:"300px", backgroundColor: "#669933", color:"white"}} variant="contained" >
                 Update
            </Button>
        </Grid>
        </section>
    );
  }
}

function mapStateToProps(state) {
    return {
        studentsList : state.studentsList,
        selectedtStudentToUpdate:state.selectedtStudentToUpdate,
        updateStudentName: state.updateStudentName,
        githubName: state.updateGithubName,
        updateStudentClassroom: state.updateStudentClassroom,
        updateStudentEmail: state.updateStudentEmail,
        updateStudentPreferredName:state.updateStudentPreferredName,
        }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveSelectedStudentforUpdating, updateStudent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
