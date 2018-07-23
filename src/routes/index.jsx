import LandingPage from '../views/LandingPage.js';
import Assignments from '../views/Instructors/Assignments.js';
import Homepage from '../views/Instructors/Homepage.jsx';
import Feedback from '../views/Instructors/Feedback.js';
import StudentsList from '../components/StudentsList.js';
// import Classmates from '../views/Students/Classmates.js';
import UserInvitesForm from '../views/Instructors/UserInvitesForm.js'
import CreateNewInstructor from '../views/Instructors/CreateNewInstructor.js'
import UpdateInstructor from '../views/Instructors/UpdateInstructor.js'
import EditClassroom from '../views/Instructors/EditClassroom.js'

let indexRoutes = [
  { path: "/lovelace-front-end/assignments", name: "Assignments", component: Assignments },
  { path: "/lovelace-front-end/homepage", name: "Instructors Homepage", component: Homepage },
  { path: "/lovelace-front-end/feedback", name: "Feedback", component: Feedback },
  { path: "/lovelace-front-end/students", name: "StudentsList", component: StudentsList },
  {path: "/lovelace-front-end/userinvites", name: "User Invites", component: UserInvitesForm},
  // { path: "/lovelace-front-end/classmates/", name: "Classmates", component: Classmates },
  {path: "/lovelace-front-end/addInstrcutors", name: "Add Instrcutors", component: CreateNewInstructor},
  {path: "/lovelace-front-end/updateInstructor", name: "Edit Instrcutors", component: UpdateInstructor},

  {path: "/lovelace-front-end/updateClassroom", name: "Edit Classroom", component: EditClassroom},

  
  { path: "/lovelace-front-end", name: "LandingPage", component: LandingPage }
  ];

export default indexRoutes;