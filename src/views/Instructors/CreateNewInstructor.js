import React, { Component } from 'react';
// import SelectCohortForm from "../../components/SelectCohortForm";
// import SelectClassroomForm from "../../components/SelectClassroomForm";
import AddNewInstructorInfo from "../../components/AddNewInstructorInfo";
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import {createInstructor} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addInviteListStudents} from '../actions';


import { 
    Grid, 
    Button,
    // SendIcon
   } from '../../components-info/MaterialUiImports'

class CreateNewInstructor extends Component {


    createInstructor = () => {
        const data = {  
            name: this.props.newInstructorName,
            github_name: this.props.newInstructorGithubName
        }
    
        this.props.createInstructor(data)
      };

  render() {

    return (
        <section>
        
        <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
            <Grid  xs={8} item >
                <AddNewInstructorInfo />
            </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            <Button onClick={this.createInstructor} style={{width:"300px"}} variant="contained" color="primary" >
                 Send {/*<SendIcon />  */}
            </Button>
        </Grid>
        </section>
    );
  }
}

function mapStateToProps(state) {
    return {
        newInstructorName: state.newInstructorName,
        newInstructorGithubName: state.newInstructorGithubName,
        }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({createInstructor}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewInstructor);



