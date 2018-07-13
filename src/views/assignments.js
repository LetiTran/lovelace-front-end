import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import ReposList from '../components/reposList.js';

class Assignments extends Component {
  render() {
     return (
         <section>
           <Paper>
           Hello, Assignments
           </Paper>
           <ReposList />
         </section>

    );
  }
}

export default Assignments;