import React, { Component } from 'react';
import {saveSelectedCohort, postUpdate, saveSelectedCohortNewData} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InputWithGrid from  '../../components/InputWithGrid';
import DatePickers from '../../components/DatePicker.js'

import { 
    Grid, 
    Button,
    TextField,
    Select,
    MenuItem,
   } from '../../components-info/MaterialUiImports'

class EditCohort extends Component {

    postUpdate = () => {
        console.log('got to postUpdate')
        const data = {  
            type: 'cohort',
            id: this.props.selectedtCohortToUpdate.id,
            name: this.props.selectedtCohortToUpdate.name

        }
        this.props.postUpdate(data)
    };

//     handleNameChange = (event) => {
//         const cohortData = 
//         {
//             id: this.props.selectedtCohortToUpdate.id,
//             name: event.target.value,
//             cohort_id: this.props.selectedtCohortToUpdate.cohort_id
//        }
//         this.props.saveSelectedCohortNewData(cohortData);
//    }

   handleChange = (element, event) => {
        const cohortData = 
        {

        id: this.props.selectedtCohortToUpdate.id,
        name: this.props.selectedtCohortToUpdate.name,
        cohort_id:event.target.value,
    }
        this.props.saveSelectedCohortNewData(cohortData);
}

handleCohortChange =(event) => {
    console.log(event.target.value)
    this.props.saveSelectedCohort(event.target.value)
}

renderCohortsList =() => {
        return this.props.cohortList.map((cohort, index) => {
            return (
            <MenuItem key={index} value={cohort.id}> {cohort.name} </MenuItem>
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
                <Select
                 value={this.props.selectedtCohortToUpdate.name}
                 onChange={this.handleCohortChange}
                 inputProps={{
                 name: `change`,
                 id: 'change-Cohort',
                 }}>
                 {this.renderCohortsList()}
                </Select>
                </Grid>
                <Grid  xs={8} item >

                <Grid container spacing={8} alignItems="flex-end">
                    <Grid md item>
                        <TextField onChange={this.handleChange} fullWidth={true} label={this.props.name} />
                    </Grid>
                </Grid>

                <InputWithGrid  element="updateCohortNumber" name="Cohort Number"/>
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
        selectedtCohortToUpdate: state.selectedtCohortToUpdate,
        cohortList : state.cohortList,
        cohortList : state.cohortList
        }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveSelectedCohort, postUpdate, saveSelectedCohortNewData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCohort);



