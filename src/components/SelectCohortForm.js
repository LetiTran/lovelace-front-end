import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import InputWithGrid from './InputWithGrid';
import ChooseCohortOrClassForm from './ChooseCohortOrClassForm.js'
import DatePickers from './DatePicker.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createCohort} from '../actions';

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

class SelectCohortForm extends Component {

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

  createCohort = () => {
    const data = {  
      number: this.props.number,
      name: this.props.name,
      repoName: this.props.repoName,
      classStartDate: this.props.classStartDate,
      classEndDate:this.props.classEndDate,
      internshipStartDate:this.props.internshipStartDate,
      internshipEndDate:this.props.internshipEndDate,
      graduationDate:this.props.graduationDate,
    }
    this.props.createCohort(data)
    this.handleClose();
    //   TODO: put function that will call the api post request here
  };

  
  render() {
    return (
      
        <Card  style={{maxWidth: 400, margin:3}} >
        <CardContent>
          
        {/* Select Existing Cohort: */}
        <CardContent>
            <ChooseCohortOrClassForm selectValue="cohort" titleText="Select Cohort" funcName="chooseCohortForInvitesForm"/>
        </CardContent>

        <CardActions>
        {/* Create new button: */}
        <Button onClick={this.handleClickOpen('body')} color="primary">
            {this.props.buttonName}
        </Button>
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
                <InputWithGrid element="newCohortNumber" name="Cohort Number"/>
                <InputWithGrid element="newCohortName" name="Name"/>
                <InputWithGrid element="newCohortRepoName" name="Repo Name"/>
                <DatePickers element="newCohortClassStartDate" text="Class Start Date"/>   
                <DatePickers element="newCohortClassEndDate" text="Class End Date"/>
                <DatePickers element="newCohortIntStartDate" text="Internship Start Date"/>
                <DatePickers element="newCohortIntEndDate" text="Internship End Date"/>
                <DatePickers element="newCohortGradDate" text="Graduation Date"/>     
                 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.createCohort} color="primary">
              Create Cohort
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        </CardContent>
        </Card>
       
    )
  }
}

SelectCohortForm.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
  console.log('function mapStateToProps:' )
    return {
      number: state.newCohortNumber,
      name: state.newCohortName,
      RrepoName: state.newCohortRepoName,
      classStartDate: state.newCohortClassStartDate,
      classEndDate: state.newCohortClassEndDate,
      internshipStartDate: state.newCohortInternshipStartDate,
      internshipEndDate: state.newCohortInternshipEndDate,
      graduationDate: state.newCohortGraduationDate,
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({createCohort}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCohortForm);
