import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { } from '../actions';
import StudentsListForCreatingGroups from './StudentsListForCreatingGroups.js'
import ListStudentsGroups from './ListStudentsGroups.js'

import {
    Grid,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '../components-info/MaterialUiImports'

class CreateGroup extends Component {

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

  render() {
     
  
    return (
      <Grid container direction="row" justify="center">
      <Grid item xs={6}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Students in Classroom {this.props.classroomName}</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
          <TableCell><StudentsListForCreatingGroups /></TableCell>
          </TableBody>
        </Table>
        </Grid>
        <Grid item xs={6}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Groups {this.props.classroomName}</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
          <TableCell><ListStudentsGroups/></TableCell>
          </TableBody>

          {/* forceUpdateCallBack={this.forceUpdateHandler} */}
        </Table>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
    return {
    classroomName: state.currentClassroom.name,
    studentsGroups: state.studentsGroups

    }
}


function mapDispatchToProps(dispatch){
        return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
