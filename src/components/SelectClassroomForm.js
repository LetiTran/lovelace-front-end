import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import InputWithGrid from './InputWithGrid';
// import CustomizedSnackbars from './MessageSnackBar.js'
import ChooseCohortOrClassForm from './ChooseCohortOrClassForm.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createClassroom} from '../actions';

// For Styles:
 import { 
 Button, 
 Dialog, 
 DialogActions,
 DialogContent, 
 DialogContentText,
 DialogTitle,
 Card,
 CardActions,
 CardContent
} from '../components-info/MaterialUiImports'

class SelectClassroomForm extends Component {

  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submitNewClassroom = () => {
    const data = {  
      name: this.props.classroomName, 
      cohortId: this.props.selectedCohort
    }
    this.props.createClassroom(data)
    this.handleClose();
    //   TODO: put function that will call the api post request here
  };
  
  render() {
    return (
      
        <Card  style={{maxWidth: 400, margin:3}} >
        <CardContent>
                
            {/* Select Existing Classroom: */}
            <CardContent>
                <ChooseCohortOrClassForm selectValue="classroom" titleText="Select Classroom" funcName="chooseClassroomForInvitesForm"/>
            </CardContent>

            <CardActions>
            {/* CreateNew button: */}
            <Button onClick={this.handleClickOpen('body')} style={{backgroundColor: "#669933", color:"white"}}>
                {this.props.buttonName}
            </Button>
            {/* <CustomizedSnackbars/> */}
            {/* Make <CustomizedSnackbars/> work with create button inside of the Dialog */}

            </CardActions>

            {/* For the pop-up dialog box: */}
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title"
            maxWidth="xs"
            >
            <DialogTitle id="dialog-title">{this.props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                {/* this.renderPopUpFormInputs() NOT WORKING...(?)*/}
                    <InputWithGrid element="newClassroomName" name="Name"/>   
                    <ChooseCohortOrClassForm  selectValue="cohort" titleText="Select Cohort for New Classroom" titleSize="insideForm" funcName="chooseCohortForNewClassroom"/>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button style={{backgroundColor: "#669933", color:"white"}}onClick={this.submitNewClassroom} >
                Create Classroom
                </Button>
                
                <Button onClick={this.handleClose} style={{backgroundColor: "#669933", color:"white"}}>
                Close
                </Button>
            </DialogActions>
            </Dialog>
        </CardContent>
        </Card>
       
    )
  }
}

SelectClassroomForm.propTypes = {
  // TODO: write proTypes....
}


function mapStateToProps(state) {
    return {
    classroomName: state.newClassroomName, 
    selectedCohort: state.selectedCohortOnFormForNewClassroom,
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({createClassroom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectClassroomForm);

