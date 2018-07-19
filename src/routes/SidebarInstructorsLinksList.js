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
        <ListItemLink to="/lovelace-front-end/feedback" primary="Feedback" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/assignments" primary="Assignments" icon={<BookIcon />} />
        <ListItemLink to="/lovelace-front-end/students" primary="StudentsList" icon={<BookIcon />} />
        <ListItemLink to="/lovelace-front-end/userinvites" primary="User Invites Form" icon={<CheckIcon />} />
      </div>
    );
  }
}

export default SidebarInstructorsLinksList;