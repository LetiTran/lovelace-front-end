import React, { Component } from 'react';
import LandingPage from './views/landing-page.js';
import Footer from './components/footer.js';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    
   return (
       <div>
          <LandingPage />
          <Footer />
       </div>
    );
  }
}

export default App;



// const LandingPage = () => (
//   <LandingPage />
// )

// const Homepage = () => (
//   <Homepage />
// )
 

// return (
//   <Router>
// <div>
   
//       <header>
//       <nav>
//    <ul>
//             <li>
//               <Link to="/LandingPage" >LandingPage</Link>
//             </li>
//             <li>
//               <Link to="/Homepage" >Homepage</Link>
//             </li>
//             </ul>
//             </nav>
//       </header>

//   <Switch>
//         <Route path="/LandingPage" component={LandingPage }/>
//         <Route path="/homepage" component={Homepage} />
//    </Switch>
//    </div>
//   </Router>