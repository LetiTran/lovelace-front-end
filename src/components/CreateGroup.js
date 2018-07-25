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

  // TODO: Make it a Switch-case function instead
  handleChange = (event) => {
    
   };

  render() {
    return (


       
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Students in Classroom {this.props.classroomName}</TableCell>
              <TableCell>Groups {this.props.classroomName}</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
          <TableCell><StudentsListForCreatingGroups/></TableCell>
          <TableCell><ListStudentsGroups/></TableCell>
          </TableBody>

        </Table>



            // <Grid container spacing={8} alignItems="flex-end">
            // <Grid md item>
            // <StudentsListForCreatingGroups/>
            // </Grid>
            // <Grid md item>
            // <ListStudentsGroups/>
            // </Grid>
            // </Grid>
    );
  }
}

function mapStateToProps(state) {
    return {
    classroomName: state.currentClassroom.name
    }
}


function mapDispatchToProps(dispatch){
        return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
