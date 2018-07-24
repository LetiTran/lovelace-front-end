import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Submission from '../../components/Submission.js'

// For Redux:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {fetchSubmissionList} from '../actions';

// For Styles:
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Paper,
  Typography 
} from '../../components-info/MaterialUiImports'


class SubmissionList extends Component {
      
    renderSubmissionList = () => {
    // console.log('studentsList in renderSubmissiontList: ' )
    console.log(this.props.submissionList)
    // console.log(this.props.currentClassroomSubmissions)
        return this.props.submissionList.map((submission,index) => {
        //  To change it for ALL STUDENTS LIST, swap this two lines:
        //  return this.props.studentsList.map((student,index) => {
        return (
            <Submission
                key={index}
                studentId={submission.student_id}
                // student_name={submission.student_name}
                assignmentId={submission.assignment_id}
                // assignmentName={submission.assignment_name}
                openPrUrl={()=> window.open(submission.pr_url, "_blank")}
                prUrl={submission.pr_url}
                submittedAt={submission.submitted_at}
                feedbackUrl={submission.feedback_url} 
                grade={submission.grade}
                instructorId={submission.instructor_id}
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

    return (
        
  <section style={styles.root}>
    <Typography style={{marginBottom: 20}} variant="title" id="tableTitle">
      Submissions {this.props.classroomName}
    </Typography>

    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Student </TableCell>
            <TableCell>Assignment</TableCell>
            <TableCell>Submiaaion Date</TableCell>
            <TableCell>PR URL</TableCell>
            <TableCell>Feedback URL</TableCell>
            <TableCell>Feedback Instructor</TableCell>
            <TableCell>Grade</TableCell>
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
      return bindActionCreators({ }, dispatch)
    }
  
  export default connect(mapStateToProps, null)(SubmissionList);
  