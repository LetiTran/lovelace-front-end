import React, { Component } from 'react';
// import UpdateInstructorInfo from "../../components/UpdateInstructorInfo";
import {saveSelectedInstructor, postUpdate, saveSelectedInstructorNewData} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import MessageSnackBar from '../../components/MessageSnackBar.js';

import { 
    Grid, 
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl
   } from '../components-info/MaterialUiImports'


import { FormLabel } from '../../node_modules/@material-ui/core';

class EditInstructor extends Component {

    postUpdate = () => {
        const data = {  
            type: 'instructor',
            id: this.props.selectedtInstructorToUpdate.id,  
            name: this.props.selectedtInstructorToUpdate.name, 
            github_name: this.props.selectedtInstructorToUpdate.github_name, 
            active: this.props.selectedtInstructorToUpdate.active, 
        }
        this.props.postUpdate(data)
    };

     handleStatusChange = (event) => {
         const instructorData = 
         {

            id: this.props.selectedtInstructorToUpdate.id,  
            name: this.props.selectedtInstructorToUpdate.id,  
            name: this.props.selectedtInstructorToUpdate.name, 
            github_name: this.props.selectedtInstructorToUpdate.github_name, 
            active: event.target.value,
        }
         this.props.saveSelectedInstructorNewData(instructorData);
    }

    handleNameChange = (event) => {
        const instructorData = 
        {

            id: this.props.selectedtInstructorToUpdate.id,  
           name: this.props.selectedtInstructorToUpdate.id,   
           name: event.target.value,
           github_name: this.props.selectedtInstructorToUpdate.github_name, 
           active: this.props.selectedtInstructorToUpdate.active,
       }
        this.props.saveSelectedInstructorNewData(instructorData);
   }

   handleGithubNameChange = (event) => {
        const instructorData = 
        {
            id: this.props.selectedtInstructorToUpdate.id,  
        name: this.props.selectedtInstructorToUpdate.id,   
        name:this.props.selectedtInstructorToUpdate.name, 
        github_name: event.target.value,
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
        console.log(event.target.value)
        this.props.saveSelectedInstructor(event.target.value)
    }

  render() {

    return (
        <section style={{width: "100%", justify:"center"}}>
        <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
            <Grid  xs={8} item >
            <FormControl>
                <FormLabel>Instructor</FormLabel> 
                <Select
                 value={this.props.selectedtInstructorToUpdate.name}
                 onChange={this.handleInstructorChange}
                 inputProps={{
                 name: `change`,
                 id: 'change-Instructor',
                 }}>
                 {this.renderInstructorsList()}
                </Select>
                </FormControl>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid md item>
                        <TextField onChange={this.handleNameChange} fullWidth={true} label={this.props.selectedtInstructorToUpdate.name} />
                    </Grid>
                    <Grid md item>
                        <TextField onChange={this.handleGithubNameChange} fullWidth={true} label={this.props.selectedtInstructorToUpdate.github_name} />
                    </Grid>
                    <Grid md item>
                    <FormControl>
                        <FormLabel>Status</FormLabel> 
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
                        </FormControl>
                    </Grid>
            {/* <InputWithGrid element="InstructorActive" name="Active"/>    */}
            </Grid>
            </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <Button onClick={this.postUpdate} style={{width:"300px", backgroundColor: "#669933", color:"white"}} variant="contained"  >
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

export default connect(mapStateToProps, mapDispatchToProps)(EditInstructor);



