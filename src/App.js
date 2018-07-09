import React, { Component } from 'react';
import Footer from './components/footer.js';

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    
   return (
       <div>
          <nav>
          <ul>
            <li><Link to="/homepage"> Link to Homepage </Link></li>
            <li><Link to="/"> Link to LandingPage </Link></li>
            <li><Link to="/assignments"> Link to Assignments </Link></li>
          </ul>
        </nav>
        {this.props.children}
        {/* Children from Router on index.js */}

          <footer><Footer /></footer>
       </div>
    );
  }
}

export default App;