import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import InputWithGrid from './InputWithGrid';
import ChooseCohortOrClassForm from './ChooseCohortOrClassForm.js'
import DatePickers from './DatePicker.js'

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

  makePostRequest = () => {
    //   put function that will call the api post request here
  };

//   renderPopUpFormInputs = () => {
//     console.log("popup called")
//     this.props.infoNeeded.forEach((element, index) => {
      
//       <InputWithGrid key={index} name={element} />
//   });
// }
 
  
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
                <InputWithGrid name="Cohort Number"/>
                <InputWithGrid name="Name"/>
                <InputWithGrid name="Repo Name"/>
                <DatePickers text="Class Start Date"/>   
                <DatePickers text="Class End Date"/>
                <DatePickers text="Internship Start Date"/>
                <DatePickers text="Internship End Date"/>
                <DatePickers text="Graduation Date"/>     
                 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.makePostRequest} color="primary">
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

export default SelectCohortForm;
