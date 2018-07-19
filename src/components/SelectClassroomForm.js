import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import InputWithGrid from './InputWithGrid';
import CustomizedSnackbars from './MessageSnackBar.js'
import ChooseCohortOrClassForm from './ChooseCohortOrClassForm.js'

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

  makePostRequest = () => {
    //   put function that will call the api post request here
  };
  
  render() {
    return (
      
        <Card  style={{maxWidth: 400, margin:3}} >
        <CardContent>
                
            {/* Select Existing Classroom: */}
            <CardContent>
                <ChooseCohortOrClassForm selectValue="classroom" titleText="Select Classroom" func="chooseClassroomForInvitesForm"/>
            </CardContent>

            <CardActions>
            {/* CreateNew button: */}
            <Button onClick={this.handleClickOpen('body')} color="primary">
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
                    <InputWithGrid name="Name"/>   
                    <ChooseCohortOrClassForm  selectValue="cohort" titleText="Select Cohort for New Classroom" titleSize="insideForm" funcName="chooseCohortForNewClassroom"/>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.makePostRequest} color="primary">
                Create Classroom
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

SelectClassroomForm.propTypes = {
  // TODO: write proTypes....
}

export default SelectClassroomForm;
