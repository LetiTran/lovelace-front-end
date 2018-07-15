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
            // onClick={()=> window.open(student.student_url, "_blank")} --> make it a link to student github page?
            name={student.name}
            email={student.email} 
            cohort={student.cohort}
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
    return (
        <section>
            {this.renderStudentList()}
        </section>
    )
  }
}

StudentsList.propTypes = {
}

export default StudentsList;
