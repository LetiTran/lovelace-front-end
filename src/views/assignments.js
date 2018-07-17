import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import AssignmentsList from '../components/AssignmentsList.js';
import Typography from '@material-ui/core/Typography';

class Assignments extends Component {
  render() {
     return (
         <section>
          <Typography variant="title" id="tableTitle">
            Assignments
          </Typography>
           <Paper > <AssignmentsList /> </Paper>
         </section>

    );
  }
}

export default Assignments;
