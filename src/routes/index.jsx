import LandingPage from '../views/landing-page.js';
import Assignments from '../views/assignments.js';
import Homepage from '../views/homepage.jsx';

let indexRoutes = [
  { path: "/assignments", name: "Assignments", component: Assignments },
  { path: "/homepage", name: "Homepage", component: Homepage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;