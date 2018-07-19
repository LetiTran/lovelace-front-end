import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import AssignmentList from '../../components/AssignmentList.js';
import Typography from '@material-ui/core/Typography';

class Assignments extends Component {
  render() {
     return (
         <section>
          <Typography variant="title" id="tableTitle">
            Assignments
          </Typography>
           <Paper > <AssignmentList /> </Paper>
         </section>

    );
  }
}

export default Assignments;
