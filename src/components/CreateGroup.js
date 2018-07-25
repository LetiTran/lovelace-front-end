import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { } from '../actions';
import StudentsListForCreatingGroups from './StudentsListForCreatingGroups.js'

import {
    Grid,
} from '../components-info/MaterialUiImports'

class CreateGroup extends Component {

  // TODO: Make it a Switch-case function instead
  handleChange = (event) => {
    
   };

  render() {
    return (
            <Grid container spacing={8} alignItems="flex-end">
            <Grid md item>
            <StudentsListForCreatingGroups/>
            </Grid>
            <Grid md item>
            {/* <ListStudentsGroups/> */}
            </Grid>
            </Grid>
    );
  }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({ }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateGroup);
