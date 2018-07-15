import LandingPage from '../views/LandingPage.js';
import Assignments from '../views/Assignments.js';
import Homepage from '../views/Homepage.jsx';
import Feedback from '../views/Feedback.js';
import StudentsList from '../views/StudentsList.js';


let indexRoutes = [
  { path: "/lovelace-front-end/assignments", name: "Assignments", component: Assignments },
  { path: "/lovelace-front-end/homepage", name: "Homepage", component: Homepage },
  { path: "/lovelace-front-end/feedback", name: "Feedback", component: Feedback },
  { path: "/lovelace-front-end/students", name: "StudentsList", component: StudentsList },
  // { path: "/lovelace-front-end/students/", name: "StudentProfile", component: StudentsList },
  { path: "/lovelace-front-end", name: "LandingPage", component: LandingPage }
  ];

export default indexRoutes;