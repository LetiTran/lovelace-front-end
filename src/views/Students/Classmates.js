import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import StudentsList from '../../components/AssignmentList.js';
import Typography from '@material-ui/core/Typography';

class Classmates extends Component {
  render() {
     return (
         <section>
          <Typography variant="title" id="tableTitle">
            Your (logged-in student) classroom Adies...
          </Typography>
           <Paper > <StudentsList /> </Paper>
         </section>

    );
  }
}

export default Classmates;

// TODO: send current logged in student cohort/classroom as props in order to decide 
// which list of students to show (handle it with redux)