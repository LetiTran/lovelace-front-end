import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
// import ReposList from '../components/ReposList.js';
import AssignmentsList from '../components/AssignmentsList.js';

class Assignments extends Component {
  render() {
     return (
         <section>
           <Paper>
           Hello, Assignments
           </Paper>
           <AssignmentsList />
         </section>

    );
  }
}

export default Assignments;
