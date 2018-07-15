import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Student from '../components/Student.js'
import axios from 'axios';


class StudentsList extends Component {


    constructor(props) {
        super(props);
        this.state = {
          students: []
        }
      }
      
      
    renderStudentList = () => {
     return this.state.students.map((student,index) => {
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
    
    componentDidMount() {
            axios.get(`http://localhost:3000/studentsapi`)

        // axios.get(`http://localhost:3000/students`)
            .then((response) => {
            console.log(response)
            this.setState({ students: response.data });
            })
            .catch((error) => {
            console.log({error: error.message});
            this.setState({ error: error.message});
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

export default StudentsList;
