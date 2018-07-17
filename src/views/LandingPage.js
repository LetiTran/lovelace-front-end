import React, { Component } from 'react';
import Login from "../components/Login.js"
import logo from "../logo-horizontal.png"

import {Grid, Paper} from '@material-ui/core';

import Cohort from '../components/Cohort.js'


class LandingPage extends Component {
   
  render() {

    const styles  = {
        Paper: {
          paddingLeft: 10,
          paddingRight: 10,
          margin: 5
        },
        Grid: {
        flexShrink: 1
        },
        Image: {
          padding: 10,
          margin: 10
        }
    };


    return (

      <Grid container  >

        <Grid container justify="center">
          <Grid item style={styles.Grid}  >
            <Paper style={styles.Paper}>
            <Cohort />
            </Paper>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item style={styles.Grid}  >
            <Paper style={styles.Paper}>
            <Login />
            </Paper>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item >
            {/* <Paper style={styles.Image}> */}
            <img className="logo" src= {logo} alt="App Logo" height="200" width="750"/>
            {/* </Paper > */}
          </Grid>
        </Grid>
          

        <Grid container justify="center">
          <Grid item >
            {/* <Paper style={styles.Paper}> */}
            <p>Staff | Teachers | Students</p>
            {/* </Paper> */}
          </Grid>
        </Grid>

      </Grid>
    );
  }
}

export default LandingPage;

