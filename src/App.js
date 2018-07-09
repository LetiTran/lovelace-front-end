import React, { Component } from 'react';
import Footer from './components/footer.js';
import MiniDrawer from './components/MiniDrawer'

import { Link } from "react-router-dom";

import { createBrowserHistory } from "history";

let hist = createBrowserHistory();

class App extends Component {


  render() {
    
   return (
       <div>
          <MiniDrawer>
          <ul role="nav">
            <li><Link to="/homepage"> Link to Homepage </Link></li>
            <li><Link to="/"> Link to LandingPage </Link></li>
            <li><Link to="/assignments"> Link to Assignments </Link></li>
          </ul>

        {this.props.children}
        {/* Children from Router on index.js */}

          <footer><Footer /></footer>
          </MiniDrawer>
       </div>
    );
  }
}

export default App;