import LandingPage from '../views/LandingPage.js';
import Assignments from '../views/Instructors/Assignments.js';
import Homepage from '../views/Instructors/Homepage.jsx';
import Feedback from '../views/Instructors/Feedback.js';
import StudentsList from '../components/StudentsList.js';
// import Classmates from '../views/Students/Classmates.js';



let indexRoutes = [
  { path: "/lovelace-front-end/assignments", name: "Assignments", component: Assignments },
  { path: "/lovelace-front-end/homepage", name: "Instructors Homepage", component: Homepage },
  { path: "/lovelace-front-end/feedback", name: "Feedback", component: Feedback },
  { path: "/lovelace-front-end/students", name: "StudentsList", component: StudentsList },
  // { path: "/lovelace-front-end/classmates/", name: "Classmates", component: Classmates },
  { path: "/lovelace-front-end", name: "LandingPage", component: LandingPage }
  ];

export default indexRoutes;