import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Submission from './Submission.js'

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
    // console.log(this.props.studentsList)
    // console.log(this.props.currentClassroomSubmissions)
        return this.props.currentClassroomSubmissions.map((student,index) => {
        //  To change it for ALL STUDENTS LIST, swap this two lines:
        //  return this.props.studentsList.map((student,index) => {
        return (
            <p>put list</p>
            // <Submission
            //     key={index}
            //     type={student.type}
            //     // onClick={()=> this.openProfile(student)}
            //     openGitHubProfile={()=> window.open("https://github.com/" + student.github_name, "_blank")}
            //     name={student.name}
            //     email={student.email} 
            //     classroom={student.classroom_id}
            //     // TODO: API sending only classroom_id --> how to sen dclass name and cohort?... do it on back-end
            //     githubName={student.github_name}
            // />
        );
        });
    }

  render() {
    return (
    <section >
    <p>put list</p>
    
    </section>
    )
  }
}

SubmissionList.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
      return {
      }
  }
  
  function mapDispatchToProps(dispatch) {
      return bindActionCreators({ }, dispatch)
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SubmissionList);
  