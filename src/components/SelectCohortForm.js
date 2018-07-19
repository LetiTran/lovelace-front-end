import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import InputWithGrid from './InputWithGrid';
import ChooseCohortForInvitesForm from './ChooseCohortForInvitesForm.js'

// For Styles:
 import { 
 Grid, 
 Button, 
 Dialog, 
 DialogActions,
 DialogContent, 
 DialogContentText,
 DialogTitle,
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
      <Grid >

    <ChooseCohortForInvitesForm />


        {/* Create new button: */}
        <Button onClick={this.handleClickOpen('body')} color="primary">
            {this.props.buttonName}
        </Button>


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
                <InputWithGrid name="Class Start Date"/>
                <InputWithGrid name="Class End Date"/>
                <InputWithGrid name="Internship Start Date"/>
                <InputWithGrid name="Internship End Date"/>
                <InputWithGrid name="Graduation Date"/>         
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
      
        </Grid>
       
    )
  }
}

SelectCohortForm.propTypes = {
  // TODO: write proTypes....
}

export default SelectCohortForm;
