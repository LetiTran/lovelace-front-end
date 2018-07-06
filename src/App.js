import React, { Component } from 'react';
import LandingPage from './views/landing-page.js';
import Homepage from './views/homepage.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    
     

    return (
      <Router>
      <Switch>
            <Route exact path="/" component={LandingPage }/>
            <Route path="/homepage" component={Homepage} />
       </Switch>
      </Router>
    );
  }
}

export default App;
