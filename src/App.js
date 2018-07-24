import React, { Component } from 'react';

// Styles:
// import Footer from './components/Footer.js';
import MiniDrawer from './components/MiniDrawer'
import Grid from "@material-ui/core/es/Grid/Grid";

// For Redux:
import {fetchSubmissionList, fetchClassroomList, fetchCohortList, fetchInstructorsList, fetchStudentsList} from './actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import withRouter from 'react-router-dom/es/withRouter'; // needed because of <Provider> around <Routes>


// require('dotenv').config({path:'/Users/leticiaogawa/Desktop/ada/Capstone/lovelace-front-end/.env.development'})



class App extends Component {

  componentDidMount(){
    this.props.fetchClassroomList()
    this.props.fetchCohortList()
    this.props.fetchInstructorsList()
    this.props.fetchStudentsList()   
    this.props.fetchSubmissionList() 
  }
  
  render() {    
   return (
       <div>
          <MiniDrawer>
            <Grid container>
              <Grid item style={{maxHeight: "85vh", position: "relative", overflow: 'scroll', width:"100%"}}>
              {this.props.children}
              {/* Children from Router on index.js */}
              </Grid>
            </Grid>
          </MiniDrawer>
          {/* <footer><Footer /></footer> */}
       </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchSubmissionList, fetchClassroomList, fetchCohortList, fetchInstructorsList, fetchStudentsList}, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(App));