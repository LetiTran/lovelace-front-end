import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MarkdownFeedback from "./MarkdownFeedback";
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
  

  render() {

    const style  = () => {
      if (this.props.grade === "meet_standard" ){
        return '#c2f0c2'
      }else if (this.props.grade === "approach_standard"){
          return '#ffffb3'
      }else if((this.props.grade === "not_standard" )){ 
          return '#ffcccc'
      }else{
        return '#f2f2f2'
      }
    }
   
    const initialSourcetwo = `# ${this.props.assignmentName}\r\n## What We\'re Looking For\r\n\r\nFeature | Feedback\r\n:------------- | :-------------\r\n**Baseline** | \r\nAppropriate Git Usage with no extraneous files checked in | Good number of commits and commit messages\r\nAnswered comprehension questions | Check, Strong Params actually ensure that no unexpected fields are inserted in creation or update operations.  Familiarity with routes & styling will come with practice.  If you have a specific question, send it on to me.  \r\nSuccessfully handles: Index, Show | Check\r\nSuccessfully handles: New, Create | Check.\r\nSuccessfully handles: Edit, Update | Check\r\nSuccessfully handles: Destroy, Task Complete | Check\r\nRoutes follow RESTful conventions | Check\r\nUses named routes (like '_path') | Check\r\nUses partial views to DRY the new and edit forms | Check\r\n**Overall** | Nicely done.  The site works and does everything expected.  The styling looks good without being too fancy. \r\n`


    return (
      <TableRow style={{backgroundColor: style()}}>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.studentName}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.assignmentName}</TableCell> 
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.dueDate}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.submittedAt}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.prUrl}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.feedbackUrl}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.instructorName}</TableCell>
        <TableCell onClick={this.handleClickOpen('paper')}>{this.props.grade}</TableCell>
        {/* Figure out how to DRY this to tablerow onclick insetad of tablecell without loosing format */}

{/* //     max-width: 1200px;
//     max-height: 600px;
//     top: 15%;
//     left: 12.5%;
// }


maxWidth: 900px,
    maxHeight: 800px,
    top: 5%,
    left: 20.5%,
    bottom: 10%, */}
        {/* For the pop-up dialog box: */}
        <Dialog
            scroll='page'
            fullScreen
            justify='center'
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          style={{
            maxWidth: "900px",
            maxHeight: "800px",
            top: "5%",
            left: "20.5%",
            bottom: "10%",
          }}

        >
          <DialogTitle id="scroll-dialog-title">{this.props.assignmentName} / {this.props.studentName}</DialogTitle>
          <DialogContent >
            <DialogContentText >
              {/* <p><strong>Student: </strong>{this.props.studentName}</p> */}
              <p><strong>Submitted At: </strong>{this.props.submittedAt}</p>
              <p><strong>PR URL: </strong>{this.props.prUrl}</p>
              <p><strong>Feedback URL: </strong>{this.props.feedbackUrl}</p>
              <p><strong>Instructor: </strong>{this.props.instructorName}</p>             
              <p><strong>Grade: </strong>{this.props.grade}</p>

              {/* TODO: send the assignment feedback template (will be sent from back-end when we have time to get to it) 
              to the MardownFeedback component and add its needed functions: */}
              <section ><MarkdownFeedback feedback={initialSourcetwo}/> </section>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.openPrUrl} style={{backgroundColor: "#669933", color:"white"}}>
              Go to PR Page
            </Button>
            <Button onClick={this.props.openFeedbackUrl} style={{backgroundColor: "#669933", color:"white"}}>
              Go to Feedback Page
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
