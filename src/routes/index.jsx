import LandingPage from '../views/landing-page.js';
import Assignments from '../views/assignments.jsx';
import Homepage from '../views/homepage.jsx';

let indexRoutes = [
  { path: "/lovelace-front-end/assignments", name: "Assignments", component: Assignments },
  { path: "/lovelace-front-end/homepage", name: "Homepage", component: Homepage },
  { path: "/lovelace-front-end", name: "LandingPage", component: LandingPage }
  ];

export default indexRoutes;