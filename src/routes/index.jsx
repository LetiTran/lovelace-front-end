import LandingPage from '../views/LandingPage.js';
import Assignments from '../views/Instructors/Assignments.js';
import Homepage from '../views/Instructors/Homepage.jsx';
import Feedback from '../views/Instructors/Feedback.js';
import Students from '../views/Instructors/Students.js';
import AdminPanels from '../views/Instructors/Admin.js';
import Submissions from '../views/Instructors/Submissions.js';

let indexRoutes = [
  { path: "/assignments", name: "Assignments", component: Assignments },
  { path: "/feedback", name: "Feedback", component: Feedback },
  {path: "/submissions", name: "Submissions", component: Submissions},

  { path: "/students", name: "Students", component: Students },

  {path: "/admin", name: "Admin Panel", component: AdminPanels},

  { path: "/homepage", name: "Instructors Homepage", component: Homepage },
  { path: "/", name: "LandingPage", component: LandingPage }
  ];

export default indexRoutes;