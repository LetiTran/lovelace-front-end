import React, { Component } from 'react';
import ListItemLink from '../components/ListItemLink'
import ChooseCohortOrClassForm from '../components/ChooseCohortOrClassForm.js'
import { 
    BookIcon, 
    HomeIcon, 
    CheckIcon, 
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    AccountCircle
} from '../components-info/MaterialUiImports'

class SidebarInstructorsLinksList extends Component {

  render() {
    return (
      <div>
                  {/* <section style={{textAlign: "center", paddingLeft: "10px"}} >Choose Classroom</section> */}

        <ListItem >
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={"Choose Classroom"} secondary={<ChooseCohortOrClassForm selectValue="classroom"  funcName="chooseCurrentClassroom" titleSize="insideForm"/>} /> 
          {/* <ListItemText > </ListItemText> */}
        </ListItem>
        <Divider light />
        <Divider light />
        {/* <ListItemLink primary="Choose Classroom" icon={<HomeIcon />} >Choose Classroom </ListItemLink> */}

        {/* <ListItemLink to="/lovelace-front-end" primary="LandingPage" icon={<HomeIcon />} /> */}

        {/* <ListItemLink to="/lovelace-front-end/homepage" primary="Instructors Homepage" icon={<HomeIcon />} /> */}
        <Divider  />
        <ListItemLink to="/assignments" primary="Assignments" icon={<BookIcon />} />
        {/* TODO: feedback should be inside of assignments or/and submissions */}
        {/* <ListItemLink to="/feedback" primary="Feedback" icon={<BookIcon />} /> 
        TODO: add assignment selectionbox inside of it and then make it availbale here too..
        currently available with a static template with no real functions of submitting it for presentantio purpose*/ } 
        <ListItemLink to="/submissions" primary="Submissions" icon={<BookIcon />} />
        <Divider light />
        <ListItemLink to="/students" primary="Students" icon={<AccountCircle />} />
        <Divider light />
        <ListItemLink to="/admin" primary="Admin Panel" icon={<BookIcon />} />
        {/* <Divider light /> */}
        
        {/* <ListItemLink to="/admin" primary="Admin" icon={<CheckIcon />} /> */}
        {/*  TODO: put all this routes bellow under Admin or Manage or something like that... 
        (either a nested list or all inside one component with multiple tabs) */}
        {/* <ListItemLink to="/lovelace-front-end/userinvites" primary="User Invites" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/addInstrcutors" primary="Add Instrcutors" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/updateInstructor" primary="Edit Instrcutors" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/updateClassroom" primary="Edit Classroom" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/updateCohort" primary="Edit Cohort" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/updateStudent" primary="Edit Student" icon={<CheckIcon />} /> */}
      </div>
    );
  }
}

export default SidebarInstructorsLinksList;