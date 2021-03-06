import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import {createAssignment} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import VerifyNewAssignment from './VerifyNewAssignment.js'
import CreateAssignment from './CreateAssignment.js'
import CreateGroup from './CreateGroup.js'

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Create Assignment', 'Create groups'];
}
//  TODO: Add  'Verify' to array and display groups for user to verify it and send put request to Submission

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CreateAssignment/>
    case 1:
      return <CreateGroup/>;
      //  Add this step for verification 
    // case 2:
    //   return <VerifyNewAssignment/>;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  createAssignment = () => {
    const data = {  
        name: this.props.newAssignmentName,
        repo_url: this.props.newAssignmentRepoUrl,
        individual: this.props.newAssignmentIndividual,
        currentClassroom: this.props.currentClassroom
    }

    this.props.createAssignment(data)
  };

  createSubmission = () => {
      const data = {

      }

    // this.props.createSubmission(data)
  }

  handleNext = (index) => {
    let jump = 1

    switch (index) {
        case 0:
            if(this.props.newAssignmentIndividual) {
                jump = 2
            } //No need for creating groups if it is individual assignment (back-end will do it automatically)
           this.createAssignment();
        case 1:
           this.createSubmission();
          //  Add this step for verification 
        // case 2:
        //    `Display Assignment and its groups`;
        default:
          null;
      }

      this.setState(state => ({
        activeStep: state.activeStep + jump,
      }));
  };

//   handleBack = () => {
//     this.setState(state => ({
//       activeStep: state.activeStep - 1,
//     }));
//   };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      {/* <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button> */}
                      <Button
                        variant="contained"
                        style={{backgroundColor: "#669933", color:"white"}}
                        onClick={()=>this.handleNext(index)}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>
                <h4 style={{ color:"#669933" }} >New {this.props.studentsGroups[0][0] ? "paired assignment" : "individual assignment"} {this.props.newAssignmentName}  with repo url {this.props.newAssignmentRepoUrl} was created! </h4>  
            </Typography>
            <Button style={{backgroundColor: "#669933", color:"white"}}onClick={this.handleReset} className={classes.button}>
              Create a New Assignment
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        newAssignmentName: state.newAssignmentName,
        newAssignmentRepoUrl: state.newAssignmentRepoUrl,
        newAssignmentIndividual: state.newAssignmentIndividual,
        currentClassroom: state.currentClassroom,

        studentsGroups: state.studentsGroups,
        newAssignmentName: state.newAssignmentName,
        newAssignmentRepoUrl: state.newAssignmentRepoUrl,
        newAssignmentIndividual: state.newAssignmentIndividual
        }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({createAssignment}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VerticalLinearStepper));
