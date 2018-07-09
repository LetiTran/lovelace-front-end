import React, { Component } from 'react';
import Footer from './components/footer.js';
import MiniDrawer from './components/MiniDrawer'

class App extends Component {


  render() {
    
   return (
       <div>
          <MiniDrawer>

        {this.props.children}
        {/* Children from Router on index.js */}

          <footer><Footer /></footer>
          </MiniDrawer>
       </div>
    );
  }
}

export default App;