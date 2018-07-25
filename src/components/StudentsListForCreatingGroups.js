import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AddStudentToGroup from './AddStudentToGroup.js'

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
  Typography ,
  List
} from '../components-info/MaterialUiImports'


class StudentsListForCreatingGroups extends Component {

    // componentDidMount() {
        // console.log('Called componentDidMount for students')
    //     this.props.fetchStudentsList()
    // }
      
    renderStudentList = () => {
    // console.log('studentsList in renderStudenttList: ' )
    // console.log(this.props.studentsList)
    // console.log(this.props.currentClassroomStudentsToAddToGroupd)
    if (Object.keys(this.props.currentClassroomStudentsToAddToGroupd).length>1) {
        return this.props.currentClassroomStudentsToAddToGroupd.map((student,index) => {
        //  To change it for ALL STUDENTS LIST, swap this two lines:
        //  return this.props.studentsList.map((student,index) => {
        return (
            <List style={{verticalAlign: "top"}}>
              <AddStudentToGroup
                key={index}
                type={student.id}
                name={student.name}
                element={student}
              />
            </List>
        );
        });
      } else {
        return <p style={{color: "red", textAlign: "center"}}>No more students to be assigned to a group!</p>
      }
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
    {/* <Typography style={{marginBottom: 20}} variant="title" id="tableTitle">
      Students on Classroom {this.props.classroomName}
    </Typography> */}

    <Paper >
      <Table >
        {/* <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead> */}

        <TableBody>
        {this.renderStudentList()}
        </TableBody>
      </Table>
    </Paper>

    
    </section>
    )
  }
}

StudentsListForCreatingGroups.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
      return {
      studentsList: state.studentsList,
      currentClassroomStudentsToAddToGroupd: state.currentClassroomStudentsToAddToGroupd,
      classroomName: state.currentClassroom.name
      }
  }
  
  function mapDispatchToProps(dispatch) {
      return bindActionCreators({fetchStudentsList}, dispatch)
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentsListForCreatingGroups);
  