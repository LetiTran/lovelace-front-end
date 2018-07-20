import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import InputWithGrid from './InputWithGrid';

import { 
    Grid
   } from '../components-info/MaterialUiImports'

class AddNewInstructorInfo extends Component {


      
    render() {

        return (
            <Grid container>
            <InputWithGrid element="newInstructorName" name="Name"/>   
            <InputWithGrid element="newInstructorGithubName" name="GitHub Name"/>   
            </Grid>
        )
    }
}

    function mapStateToProps(state) {
        return {
            newInstructorName: state.newInstructorName,
            newInstructorGithubName: state.newInstructorGithubName,
            }
    }
    
    // function mapDispatchToProps(dispatch){
    //     return bindActionCreators({createInstructor}, dispatch)
    // }
    
    export default connect(mapStateToProps, null)(AddNewInstructorInfo);
    
    
