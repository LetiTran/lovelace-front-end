import React, { Component } from 'react';
import LandingPage from './views/landing-page.js';
import Footer from './components/footer.js';

import { Link } from "react-router-dom";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from  './routes/index.jsx'

let hist = createBrowserHistory();

class App extends Component {
  render() {
    
   return (
       <div>
            <Router history={hist}>
              <div>
                <nav>
                  <ul>
                    <li><Link to="/homepage"> Link to Homepage </Link></li>
                    <li><Link to="/"> Link to LandingPage </Link></li>
                    <li><Link to="/assignments"> Link to Assignments </Link></li>
                  </ul>
                </nav>

                <Switch>
                  {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} key={key} component={prop.component} />;
                  })}
                </Switch>
              </div>
            </Router>

          <footer><Footer /></footer>
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