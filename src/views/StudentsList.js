import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Student from '../components/Student.js'

// For Redux:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStudentsList} from '../actions';

class StudentsList extends Component {

    componentDidMount() {
        console.log('Called componentDidMount for students')
        this.props.fetchStudentsList()
    }
      
    renderStudentList = () => {
        console.log('studentsList in renderAssignmentsList: ' )
        console.log(this.props.studentsList)
     return this.props.studentsList.map((student,index) => {
        return (
            <Student
                key={index}
                type={student.type}
                onClick={()=> window.open("https://github.com/" + student.github_name, "_blank")}
                name={student.name}
                email={student.email} 
                classroom={student.classroom_id}
                // TODO: API sending only classroom_id --> how to sen dclass name and cohort?... do it on back-end
                githubName={student.github_name}
            />
        );
        });
    }

  render() {
    const tableHead = {
        padding: 20
    }

    return (
        <section>
            <table>
            <caption style={{ fontSize: 50}}>Students</caption>
                <thead>
                <tr>
                <th style={tableHead}> Student Name </th>
                <th style={tableHead}> Classroom </th>
                <th style={tableHead}> Class </th>
                <th style={tableHead}> GitHub Name </th>
                <th style={tableHead}> Email </th>
                </tr>
                </thead>

                <tbody>
                {this.renderStudentList()}
                </tbody>
            </table>
           
        </section>
    )
  }
}

StudentsList.propTypes = {
}

function mapStateToProps(state) {
    console.log('function mapStateToProps:' )
      console.log(state.studentsList)
      return {
      studentsList: state.studentsList
      }
  }
  
  function mapDispatchToProps(dispatch) {
      return bindActionCreators({fetchStudentsList}, dispatch)
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
  