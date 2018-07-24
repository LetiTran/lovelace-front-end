import LandingPage from '../views/LandingPage.js';
import Assignments from '../views/Instructors/Assignments.js';
import Homepage from '../views/Instructors/Homepage.jsx';
import Feedback from '../views/Instructors/Feedback.js';
import Students from '../views/Instructors/Students.js';
// import UserInvitesForm from '../components/UserInvitesForm.js'
// import CreateNewInstructor from '../components/CreateNewInstructor.js'
// import UpdateInstructor from '../views/Instructors/UpdateInstructor.js'
// import EditClassroom from '../views/Instructors/EditClassroom.js'
// import UpdateCohort from '../views/Instructors/UpdateCohort.js'
// import EditStudent from '../views/Instructors/UpdateStudent.js'
import AdminPanels from '../views/Instructors/Admin.js'

// import EditInstructor from  '../components/EditInstructor.js'

let indexRoutes = [
  { path: "/lovelace-front-end/assignments", name: "Assignments", component: Assignments },
  { path: "/lovelace-front-end/homepage", name: "Instructors Homepage", component: Homepage },
  { path: "/lovelace-front-end/feedback", name: "Feedback", component: Feedback },
  { path: "/lovelace-front-end/students", name: "Students", component: Students },
  // {path: "/lovelace-front-end/userinvites", name: "User Invites", component: UserInvitesForm},
  // {path: "/lovelace-front-end/addInstrcutors", name: "Add Instrcutors", component: CreateNewInstructor},
  // {path: "/lovelace-front-end/updateInstructor", name: "Edit Instrcutors", component: UpdateInstructor},
  // {path: "/lovelace-front-end/updateClassroom", name: "Edit Classroom", component: EditClassroom},
  // {path: "/lovelace-front-end/updateCohort", name: "Edit Cohort", component: UpdateCohort},
  // {path: "/lovelace-front-end/updateStudent", name: "Edit Student", component: EditStudent},

  {path: "/lovelace-front-end/admin", name: "Admin Panel", component: AdminPanels},

  { path: "/lovelace-front-end", name: "LandingPage", component: LandingPage }
  ];

export default indexRoutes;