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


class Submission extends Component {

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

  openPrPage =() => {
    window.open(this.props.openPrUrl)
  }

  openFeedback=() => {
    //   TODO: PUT feedback component here for this specific pr
  }

  render() {
    return (
      <TableRow>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.studentName}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.assignmentName}</TableCell> 
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.submittedAt}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.prUrl}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.feedbackUrl}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.instructorName}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.grade}</TableCell>
        {/* Figure out how to DRY this to tablerow onclick insetad of tablecell without loosing format */}


        {/* For the pop-up dialog box: */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">{this.props.assignmentName} / {this.props.studentName}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p><strong>Student: </strong>{this.props.studentName}</p>
              <p><strong>Submitted At: </strong>{this.props.submittedAt}</p>
              <p><strong>PR URL: </strong>{this.props.prUrl}</p>
              <p><strong>Feedback URL: </strong>{this.props.feedbackUrl}</p>
              <p><strong>Instructor: </strong>{this.props.instructorName}</p>             
              <p><strong>Grade: </strong>{this.props.grade}</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.openPrPage} style={{backgroundColor: "#669933", color:"white"}}>
              Go to PR Page
            </Button>
            <Button onClick={this.props.openFeedback} style={{backgroundColor: "#669933", color:"white"}}>
              Go to Feedback
            </Button>
            <Button onClick={this.handleClose} style={{backgroundColor: "#669933", color:"white"}}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        
        </TableRow>

       
    )
  }
}

Submission.propTypes = {
  // TODO: write proTypes....
}

export default Submission;
