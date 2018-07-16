import React, { Component } from 'react';
import Footer from './components/Footer.js';
import MiniDrawer from './components/MiniDrawer'
import Grid from "@material-ui/core/es/Grid/Grid";


import {fetchClassroomList} from './actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import withRouter from 'react-router-dom/es/withRouter';

class App extends Component {

    // static contextTypes = {
    //   redux: React.PropTypes.object
    // }
  
    // componentDidMount () {
    //   this.context.redux.getState()
    //   this.props.dispatch(fetchClassroomList())
    // }
  

  // componentDidMount() {
  //   console.log(this.props)
  //   // const { fetchClassroomList } = this.props.actions;
  //   // fetchClassroomList();
  // }

  // componentDidMount(){
  //   console.log(this.props.fetchClassroomList)
  //   this.props.fetchClassroomList()
  // }
  

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
  return bindActionCreators({fetchClassroomList}, dispatch)
  
}

export default withRouter(connect(null, mapDispatchToProps)(App));
// export default App;