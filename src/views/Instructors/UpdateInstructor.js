import React, { Component } from 'react';
// import UpdateInstructorInfo from "../../components/UpdateInstructorInfo";
import {saveSelectedInstructor, postUpdate, saveSelectedInstructorNewData} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import MessageSnackBar from '../../components/MessageSnackBar.js';

import { 
    Grid, 
    Button,
    TextField,
    Select,
    MenuItem,
    
   } from '../../components-info/MaterialUiImports'

class UpdateInstructor extends Component {

    postUpdate = () => {
        // const data = {  
        //     name: this.props.newInstructorName,
        //     github_name: this.props.newInstructorGithubName
        // }
        // this.props.postUpdate(data)
    };

     handleStatusChange = (event) => {
         const instructorData = 
         {
            name: this.props.selectedtInstructorToUpdate.id,  
            name: this.props.selectedtInstructorToUpdate.name, 
            github_name: this.props.selectedtInstructorToUpdate.github_name, 
            uid: this.props.selectedtInstructorToUpdate.uid, 
            active: event.target.value,
        }
         this.props.saveSelectedInstructorNewData(instructorData);
    }

    handleNameChange = (event) => {
        const instructorData = 
        {
           name: this.props.selectedtInstructorToUpdate.id,   
           name: event.target.value,
           github_name: this.props.selectedtInstructorToUpdate.github_name, 
           uid: this.props.selectedtInstructorToUpdate.uid, 
           active: this.props.selectedtInstructorToUpdate.active,
       }
        this.props.saveSelectedInstructorNewData(instructorData);
   }

   handleGithubNameChange = (event) => {
        const instructorData = 
        {
        name: this.props.selectedtInstructorToUpdate.id,   
        name:this.props.selectedtInstructorToUpdate.name, 
        github_name: event.target.value,
        uid: this.props.selectedtInstructorToUpdate.uid, 
        active: this.props.selectedtInstructorToUpdate.active,
    }
        this.props.saveSelectedInstructorNewData(instructorData);
}

    handleUidChange = (event) => {
        const instructorData = 
        {
        name: this.props.selectedtInstructorToUpdate.id,  
        name:this.props.selectedtInstructorToUpdate.name, 
        github_name: this.props.selectedtInstructorToUpdate.github_name, 
        uid: event.target.value, 
        active: this.props.selectedtInstructorToUpdate.active,
    }
        this.props.saveSelectedInstructorNewData(instructorData);
    }

    renderInstructorsList =() => {
        return this.props.instructorsList.map((instruc, index) => {
            return (
            <MenuItem key={index} value={instruc.id}> {instruc.name} </MenuItem>
            );
        });
    }

    handleInstructorChange =(event) => {
        this.props.saveSelectedInstructor(event.target.value)
    }

  render() {

    return (
        <section>
        <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
            <Grid  xs={8} item >
                <Select
                 value={this.props.selectedtInstructor}
                 onChange={this.handleInstructorChange}
                 inputProps={{
                 name: `change`,
                 id: 'change-Instructor',
                 }}>
                 {this.renderInstructorsList}
                </Select>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid md item>
                        <TextField onChange={this.handleNameChange} fullWidth={true} label='Name' />
                    </Grid>
                    <Grid md item>
                        <TextField onChange={this.handleGithubNameChange} fullWidth={true} label='GitHub Name' />
                    </Grid>
                    <Grid md item>
                        <TextField onChange={this.handleUidChange} fullWidth={true} label='Uid' />
                    </Grid>
                    <Select
                        value={this.props.selectedtInstructorToUpdate.active}
                        onChange={this.handleActiveChange}
                        inputProps={{
                        name: `change`,
                        id: 'change-Instructor',
                        }}
                    >
                        <MenuItem value={true}> Active </MenuItem>
                        <MenuItem value={false}> Inactive </MenuItem>
                    </Select>
            {/* <InputWithGrid element="InstructorActive" name="Active"/>    */}
            </Grid>
            </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <Button onClick={this.postUpdate} style={{width:"300px"}} variant="contained" color="primary" >
                 Update
            </Button>
        </Grid>
        </section>
    );
  }
}

function mapStateToProps(state) {
    return {
        selectedtInstructorToUpdate: state.selectedtInstructorToUpdate,
        instructorsList : state.instructorsList
        // updateInstructorInfo: state.updateInstructorInfo,
        }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveSelectedInstructor, postUpdate, saveSelectedInstructorNewData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInstructor);



