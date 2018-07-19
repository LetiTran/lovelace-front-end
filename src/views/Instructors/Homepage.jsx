import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Grid, Paper} from '@material-ui/core';
import Classroom from '../../components/Classroom.js'
import ChooseCohortOrClassForm from '../../components/ChooseCohortOrClassForm.js'


class Homepage extends Component {
  render() {
    const styles = ({
      root: {
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
      },
    });


     return (
      <section >      
      <Grid container  >

      Hello, Homepage!
      Put a dashboard view with calendar etc.
      
        <Grid container justify="flex-start">
          <Grid item style={styles.root}  >
            <Paper elevation={2} style={styles.Paper}>
            <div style={styles.root}><ChooseCohortOrClassForm selectValue="cohort" titleText="Select Current Cohort"  funcName="chooseCurrentCohort" /></div>
            </Paper>
          </Grid>
          <Grid item style={styles.root}  >
            <Paper elevation={2} style={styles.Paper}>
            <div style={styles.root}><Classroom /></div>
            </Paper>
          </Grid>
        </Grid>

      </Grid>
      </section>

    );
  }
}

export default Homepage;