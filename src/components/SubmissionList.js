import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Submission from './Submission.js'

// For Redux:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSubmissionList} from '../actions';

// For Styles:
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Paper,
  Typography 
} from '../components-info/MaterialUiImports'


class SubmissionList extends Component {
      
  componentDidMount(){
    this.props.fetchSubmissionList() 
  }

    renderSubmissionList = () => {
    console.log(this.props.submissionList)
        return this.props.submissionList.map((submission,index) => {
        return (
            <Submission
                key={index}
                studentName={submission.data.display_data.student_name[0]}
                // {TODO: Change the student name of rendering only the first element to rendering the whole leis(in case of a grup assignment)}
                assignmentName={submission.data.display_data.assignment_name}
                instructorName={submission.data.display_data.instructor_name}
                // assignmentName={submission.assignment_name}
                openPrUrl={()=> window.open(submission.data.raw.pr_url, "_blank")}
                prUrl={submission.data.raw.pr_url}
                dueDate={submission.data.display_data.due_date}
                submittedAt={submission.data.display_data.submission_date}
                feedbackUrl={submission.data.raw.feedback_url} 
          
                openFeedbackUrl={()=> window.open(submission.data.raw.feedback_url, "_blank")}
                grade={submission.data.raw.grade}
                instructorId={submission.data.display_data.instructor_id}
                // instructorName={submission.instructor_name}
            />
        );
        });
    }

  render() {

    const styles =  {
        root: {
          width: '100%',
          marginTop: 10,
          overflowX: 'auto',
        },
        table: {
          minWidth: 700,
        },
      };

      const colorCodeRedStyle = {
        alignSelf: "center",
        marginRight: "20px",
        marginBottom: 20, 
        backgroundColor:'#ffcccc', 
        width: "150px", 
        textAlign: "center"
      }

      const colorCodeYellowStyle = {
        alignSelf: "center",
        marginRight: "20px",
        marginBottom: 20, 
        backgroundColor:'#ffffb3', 
        width: "150px", 
        textAlign: "center"
      }

      const colorCodeGreenStyle = {
        alignSelf: "center",
        marginRight: "20px",
        marginBottom: 20, 
        backgroundColor:'#c2f0c2', 
        width: "150px", 
        textAlign: "center"
      }



    return (
        
  <section style={styles.root}>
    <Typography style={{marginBottom: 20}} variant="title" id="tableTitle">
      Submissions {this.props.classroomName}
    </Typography>

    {/* <Typography style={{marginBottom: 20, color:'#c2f0c2'}} variant="title" id="tableTitle"> */}
     <section style={{display: "inline-flex"}}><p style={colorCodeGreenStyle}> Meets Standard </p> <p style={colorCodeYellowStyle}> Approaches Standard </p> <p style={colorCodeRedStyle}> Not Standard </p></section>
    {/* </Typography> */}
    {/* <Typography style={{marginBottom: 20, color:'#ffffb3'}} variant="title" id="tableTitle">
      Approaches Standard
    </Typography>
    <Typography style={{marginBottom: 20, color:'#ffcccc'}} variant="title" id="tableTitle">
      Not Standard
    </Typography> */}

    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Student </TableCell>
            <TableCell>Assignment</TableCell>
            <TableCell>Due Date </TableCell>
            <TableCell>Submision Date</TableCell>
            {/* <TableCell>PR URL</TableCell> */}
            {/* <TableCell>Feedback URL</TableCell> */}
            <TableCell>Feedback Instructor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.renderSubmissionList()}
        </TableBody>
      </Table>
    </Paper>
    
    </section>
    )
  }
}

SubmissionList.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
      return {
        submissionList: state.submissionList
      }
  }
  
  function mapDispatchToProps(dispatch) {
      return bindActionCreators({fetchSubmissionList }, dispatch)
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SubmissionList);
  