import React, { Component } from 'react';
import {saveSelectedStudentforUpdating, updateStudent} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InputWithGrid from  '../../components/InputWithGrid';
import ChooseCohortOrClassForm from '../../components/ChooseCohortOrClassForm';

import { 
    Grid, 
    Button,
    Select,
    MenuItem,
   } from '../../components-info/MaterialUiImports'

class EditStudent extends Component {

    updateStudent = () => {
        console.log('got to postUpdate')
        const data = {  
            id:this.props.selectedtStudentToUpdate.id,
            name: this.props.updateStudentName,
            githubName: this.props.githubName,
            classroom: this.props.updateStudentClassroom,
            email: this.props.updateStudentEmail,
            prefferedName:this.props.updateStudentPreferredName,
        }
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
            {/* TODO: put title on select fields */}
            <p>student:</p>
                <Select
                 value={this.props.selectedtStudentToUpdate}
                 onChange={this.handleStudentChange}
                 inputProps={{
                 name: `change`,
                 id: 'change-student',
                 }}>
                 {this.renderStudentsList()}
                </Select>
                </Grid>
                <Grid  xs={8} item >
                
                <p>classroom:</p>
                <ChooseCohortOrClassForm titleSize="insideForm" funcName="chooseClassroomForUpdatingStudent"/>

                <InputWithGrid  element="updateStudentName" name="Student Name"/>
                {/* <InputWithGrid element="updateStudentClassroom" name="Classroom"/>  */}
                {/* deal with drop-down classroom */}
                <InputWithGrid element="updateStudentEmail" name="Email"/>
                <InputWithGrid element="updateStudentPreferredName" name="PreferredName"/>
                </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <Button onClick={this.updateStudent} style={{width:"300px"}} variant="contained" color="primary" >
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
