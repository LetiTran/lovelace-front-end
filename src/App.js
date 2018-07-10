import React, { Component } from 'react';
import Footer from './components/footer.js';
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

            <section
                style={{ position: 'fixed', width:"100%", right: "0", bottom:"0" }}>
              <Footer />
            </section>
          {/*<footer><Footer /></footer>*/}
          </MiniDrawer>

       </div>
    );
  }
}

export default App;