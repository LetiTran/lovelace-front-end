import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Student from './Student.js'

// For Redux:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStudentsList} from '../actions';

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


class StudentsList extends Component {

    // componentDidMount() {
        // console.log('Called componentDidMount for students')
    //     this.props.fetchStudentsList()
    // }
      
    renderStudentList = () => {
    // console.log('studentsList in renderStudenttList: ' )
    // console.log(this.props.studentsList)
    // console.log(this.props.currentClassroomStudents)
      let classroomName = this.props.classroomNamePatch
    if(this.props.classroom === 1){
      classroomName = "Ampers"
    }else { //(this.props.classroom === 2)
      classroomName = "Octos"
    }
        return this.props.currentClassroomStudents.map((student,index) => {
        //  To change it for ALL STUDENTS LIST, swap this two lines:
        //  return this.props.studentsList.map((student,index) => {
        return (
            <Student
                key={index}
                type={student.type}
                // onClick={()=> this.openProfile(student)}
                openGitHubProfile={()=> window.open("https://github.com/" + student.github_name, "_blank")}
                name={student.name}
                email={student.email} 

                // TODO: change this later when api is sending is the classroom name of each student.
                // classroom={student.classroom_id}
                classroomName={classroomName}
                // classroomName={student.classroom_name}
                // cohortName={student.cohort_name}
                cohortName="C9"
                // TODO: API sending only classroom_id --> how to sen dclass name and cohort?... do it on back-end
                // githubName={student.github_name} TODO: add it back after presentantio
            />
        );
        });
    }

  render() {
    // console.log('students: ' + this.props.assignments)
    
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
      Students 
    </Typography>
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Cohort</TableCell>
            <TableCell>Classroom</TableCell>
            {/* <TableCell>GitHub Name</TableCell> TODO: add it back after presentantio */}
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.renderStudentList()}
        </TableBody>
      </Table>
    </Paper>

    
    </section>
    )
  }
}

StudentsList.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
      return {
      studentsList: state.studentsList,
      currentClassroomStudents: state.currentClassroomStudents,
      classroom: state.currentClassroom,
      cohortName: state.currentCohort.name,
      classroomNamePatch: state.currentClassroom.name
    }
  }
  
  function mapDispatchToProps(dispatch) {
      return bindActionCreators({fetchStudentsList}, dispatch)
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
  