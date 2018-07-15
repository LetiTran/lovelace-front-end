import React, { Component } from 'react';
import Footer from './components/Footer.js';
import MiniDrawer from './components/MiniDrawer'
import Grid from "@material-ui/core/es/Grid/Grid";


class App extends Component {


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

export default App;