import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeGroupSize} from '../actions';
import StudentsListForCreatingGroups from './StudentsListForCreatingGroups.js'
import ListStudentsGroups from './ListStudentsGroups.js'
import GroupSize from './GroupSize.js'

import {
    Grid,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TextField
} from '../components-info/MaterialUiImports'

class VerifyNewAssignment extends Component {

  // constructor(){
  //   super();
  //   this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  // };
  
  // forceUpdateHandler(){
  //   this.forceUpdate();
  // };

  // forceUpdateHandler = () => {
  //   console.log('force update called')
  //   this.forceUpdate()
  //  }

  // handleGroupSize = (event) => {
  //   this.props.changeGroupSize(event.target.value)
  // }

  render() {
    return (
      <section>
      
      <Grid container direction="row" justify="center">
      <Grid item xs={6}>
        {/* <h4>Groups:</h4>    
        <p>{this.props.studentsGroups} </p> */}
        
        <h4>New {this.props.studentsGroups[0][0].name? "paired assignment" : "individual assignment"} {this.props.newAssignmentName}  with repo url {this.props.newAssignmentRepoUrl} was created! </h4>  
        
        </Grid>
      </Grid>
      </section>
    );
  }
}

function mapStateToProps(state) {
    return {
    studentsGroups: state.studentsGroups,
    newAssignmentName: state.newAssignmentName,
    newAssignmentRepoUrl: state.newAssignmentRepoUrl,
    newAssignmentIndividual: state.newAssignmentIndividual

    }
}


function mapDispatchToProps(dispatch){
        return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyNewAssignment);
