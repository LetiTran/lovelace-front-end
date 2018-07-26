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
            <TableCell>Due Date </TableCell>
            <TableCell>Submision Date</TableCell>
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
      return bindActionCreators({fetchSubmissionList }, dispatch)
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SubmissionList);
  