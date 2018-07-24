import React, { Component } from 'react';
import ListItemLink from '../components/ListItemLink'

import { 
    BookIcon, 
    HomeIcon, 
    CheckIcon, 
} from '../components-info/MaterialUiImports'

class SidebarInstructorsLinksList extends Component {

  render() {
    return (
      <div>
        <ListItemLink to="/lovelace-front-end" primary="LandingPage" icon={<HomeIcon />} />

        <ListItemLink to="/lovelace-front-end/homepage" primary="Instructors Homepage" icon={<HomeIcon />} />
        
        <ListItemLink to="/lovelace-front-end/assignments" primary="Assignments" icon={<BookIcon />} />
        {/* TODO: feedback should be inside of assignments or/and submissions */}
        <ListItemLink to="/lovelace-front-end/feedback" primary="Feedback" icon={<BookIcon />} />

        <ListItemLink to="/lovelace-front-end/students" primary="Students" icon={<BookIcon />} />
      
        {/* <ListItemLink to="/lovelace-front-end/admin" primary="Admin" icon={<CheckIcon />} /> */}
        {/*  TODO: put all this routes bellow under Admin or Manage or something like that... 
        (either a nested list or all inside one component with multiple tabs) */}
        <ListItemLink to="/lovelace-front-end/userinvites" primary="User Invites" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/addInstrcutors" primary="Add Instrcutors" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/updateInstructor" primary="Edit Instrcutors" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/updateClassroom" primary="Edit Classroom" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/updateCohort" primary="Edit Cohort" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/updateStudent" primary="Edit Student" icon={<CheckIcon />} />
      </div>
    );
  }
}

export default SidebarInstructorsLinksList;