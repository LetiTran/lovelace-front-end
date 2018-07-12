import LandingPage from '../views/landing-page.js';
import Assignments from '../views/assignments.js';
import Homepage from '../views/homepage.jsx';
import Feedback from '../views/feedback.js';

let indexRoutes = [
  { path: "/lovelace-front-end/assignments", name: "Assignments", component: Assignments },
  { path: "/lovelace-front-end/homepage", name: "Homepage", component: Homepage },
  { path: "/lovelace-front-end/feedback", name: "Feedback", component: Feedback },
  { path: "/lovelace-front-end", name: "LandingPage", component: LandingPage }
  ];

export default indexRoutes;