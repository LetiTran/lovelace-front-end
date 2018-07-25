import React, { Component } from 'react';
// import {updateAssignment} from '../actions';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import InputWithGrid from './InputWithGrid.js'
// import MessageSnackBar from '../../components/MessageSnackBar.js';
import SelectionBoxForIndividualAssignment from './SelectionBoxForIndividualAssignment.js'

import { 
    Grid, 
    Button,
   } from '../components-info/MaterialUiImports'



class EditAssignment extends Component {

    updateAssignment = () => {
        const data = {  
            name: this.props.newAssignmentName,
            repo_url: this.props.newAssignmentRepoUrl,
            individual: this.props.newAssignmentIndividual
        }
        this.props.updateAssignment(data)
      };

     

  render() {
    return (
        <section style={{width: "100%", justify:"center"}}>
        <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
            <Grid  xs={8} item >
            <Grid container spacing={8} alignItems="flex-end">
            <InputWithGrid element="newAssignmentName" name="Name"/>   
            <InputWithGrid element="newAssignmentRepoUrl" name="Repo URL"/>   

            </Grid>
            </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <SelectionBoxForIndividualAssignment/>
        </Grid>

         <Grid style={{margin:"30px"}} container justify="center">
            <Button onClick={this.updateAssignments} style={{width:"300px"}} variant="contained" color="primary" >
                 Create 
            </Button>
        </Grid>
        </section>
    );
  }
}

function mapStateToProps(state) {
    return {
        newAssignmentName: state.newAssignmentName,
        newAssignmentRepoUrl: state.newAssignmentRepoUrl,
        newAssignmentIndividual: state.newAssignmentIndividual
        }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({updateAssignment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAssignment);



