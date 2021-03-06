import React, { Component } from 'react';
import {saveSelectedClassroom, postUpdate, saveSelectedClassroomNewData} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { 
    Grid, 
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl
   } from '../components-info/MaterialUiImports'
import { FormLabel } from '../../node_modules/@material-ui/core';

class EditClassroom extends Component {

    postUpdate = () => {
        console.log('got to postUpdate')
        const data = {  
            type: 'classroom',
            id: this.props.selectedtClassroomToUpdate.id,
            name: this.props.selectedtClassroomToUpdate.name,
            cohort_id: this.props.selectedtClassroomToUpdate.cohort_id

        }
        this.props.postUpdate(data)
    };

    handleNameChange = (event) => {
        const classroomData = 
        {
            id: this.props.selectedtClassroomToUpdate.id,
            name: event.target.value,
            cohort_id: this.props.selectedtClassroomToUpdate.cohort_id
       }
        this.props.saveSelectedClassroomNewData(classroomData);
   }

   handleCohortChange = (event) => {
        const classroomData = 
        {

        id: this.props.selectedtClassroomToUpdate.id,
        name: this.props.selectedtClassroomToUpdate.name,
        cohort_id:event.target.value,
    }
        this.props.saveSelectedClassroomNewData(classroomData);
}

handleClassroomChange =(event) => {
    console.log(event.target.value)
    this.props.saveSelectedClassroom(event.target.value)
}

renderClassroomsList =() => {
        return this.props.classroomList.map((classroom, index) => {
            return (
            <MenuItem key={index} value={classroom.id}> {classroom.name} </MenuItem>
            );
        });
    }

    renderCohortsList=() => {
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
                <FormLabel>Classroom</FormLabel> 
                <Select
                 value={this.props.selectedtClassroomToUpdate.name}
                 onChange={this.handleClassroomChange}
                 inputProps={{
                 name: `change`,
                 id: 'change-Classroom',
                 }}>
                 {this.renderClassroomsList()}
                </Select>
                </FormControl>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid md item>
                        <TextField onChange={this.handleNameChange} fullWidth={true} label={this.props.selectedtClassroomToUpdate.name ? this.props.selectedtClassroomToUpdate.name : "Name"} />
                    </Grid>
                    <Grid md item>
                    <FormControl>
                       <FormLabel>Cohort</FormLabel> 
                        <Select
                            value={this.props.selectedtClassroomToUpdate.cohort_id}
                            onChange={this.handleCohortChange}
                            inputProps={{
                            name: `change`,
                            id: 'change-cohort-id',
                            }}
                        >
                        <MenuItem value="" disabled>
                            Cohort
                        </MenuItem>
                        {this.renderCohortsList()}
                        </Select>
                        </FormControl>
                    </Grid>
            {/* <InputWithGrid element="ClassroomActive" name="Active"/>    */}
            </Grid>
            </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <Button  onClick={this.postUpdate} style={{width:"300px", backgroundColor: "#669933", color:"white"}} variant="contained"  >
                 Update
            </Button>
        </Grid>
        </section>
    );
  }
}

function mapStateToProps(state) {
    return {
        selectedtClassroomToUpdate: state.selectedtClassroomToUpdate,
        cohortList : state.cohortList,
        classroomList : state.classroomList
        }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveSelectedClassroom, postUpdate, saveSelectedClassroomNewData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditClassroom);



