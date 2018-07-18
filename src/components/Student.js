import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// For Styles:
 import { 
 TableCell,
 TableRow, 
 Button, 
 Dialog, 
 DialogActions,
 DialogContent, 
 DialogContentText,
 DialogTitle,
} from '../components-info/MaterialUiImports'


class Student extends Component {


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


  render() {
    return (
      <TableRow>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.name}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>Put Cohort </TableCell> 
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.classroom}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.githubName}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.email}</TableCell>
        {/* Figure out how to DRY this to tablerow onclick insetad of tablecell without loosing format */}


        {/* For the pop-up dialog box: */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">{this.props.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              put github picture?
              <p><strong>Cohort: </strong>Put Cohort</p>
              <p><strong>Classroom: </strong>{this.props.classroom}</p>
              <p><strong>GitHub name: </strong>{this.props.githubName}</p>
              <p><strong>Email: </strong>{this.props.email}</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.openGitHubProfile} color="primary">
              See GitHub Page
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        
        </TableRow>

       
    )
  }
}

Student.propTypes = {
  // TODO: write proTypes....
}

export default Student;
