import React, { Component } from 'react';
import ListItemLink from '../components/ListItemLink'

import { 
    BookIcon, 
    HomeIcon, 
    CheckIcon, 
} from '../components-info/MaterialUiImports'

class SidebarStudentsLinksList extends Component {

  render() {
    return (
      <div>
        {/* <ListItemLink to="/lovelace-front-end" primary="LandingPage" icon={<HomeIcon />} /> */}
        {/* <ListItemLink to="/lovelace-front-end/homepage" primary="Homepage" icon={<HomeIcon />} /> */}
        {/* <ListItemLink to="/lovelace-front-end/classmates" primary="Classmates" icon={<CheckIcon />} /> */}
        {/* <ListItemLink to="/lovelace-front-end/assignments" primary="Assignments" icon={<BookIcon />} /> */}
      </div>
    );
  }
}

export default SidebarStudentsLinksList;