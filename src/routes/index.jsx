import LandingPage from '../views/LandingPage.js';
import Assignments from '../views/Instructors/Assignments.js';
import Homepage from '../views/Instructors/Homepage.jsx';
import Feedback from '../views/Instructors/Feedback.js';
import Students from '../views/Instructors/Students.js';
import AdminPanels from '../views/Instructors/Admin.js';
import Submissions from '../views/Instructors/Submissions.js';

let indexRoutes = [
  { path: "/lovelace-front-end/assignments", name: "Assignments", component: Assignments },
  { path: "/lovelace-front-end/feedback", name: "Feedback", component: Feedback },
  {path: "/lovelace-front-end/submissions", name: "Submissions", component: Submissions},

  { path: "/lovelace-front-end/students", name: "Students", component: Students },

  {path: "/lovelace-front-end/admin", name: "Admin Panel", component: AdminPanels},

  { path: "/lovelace-front-end/homepage", name: "Instructors Homepage", component: Homepage },
  { path: "/lovelace-front-end", name: "LandingPage", component: LandingPage }
  ];

export default indexRoutes;