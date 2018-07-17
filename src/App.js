import React, { Component } from 'react';

// Styles:
import Footer from './components/Footer.js';
import MiniDrawer from './components/MiniDrawer'
import Grid from "@material-ui/core/es/Grid/Grid";

// For Redux:
import {fetchClassroomList, fetchCohortList} from './actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import withRouter from 'react-router-dom/es/withRouter'; // needed because of <Provider> around <Routes>

class App extends Component {

  componentDidMount(){
    this.props.fetchClassroomList()
    this.props.fetchCohortList()
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
          <footer><Footer /></footer>
       </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchClassroomList, fetchCohortList}, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(App));