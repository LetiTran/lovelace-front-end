import React, { Component } from 'react';
import ListItemLink from './ListItemLink'

import { 
    BookIcon, 
    HomeIcon, 
    CheckIcon, 
} from '../components-info/MaterialUiImports'

class LinksList extends Component {

  render() {
    return (
    
      <div>
        <ListItemLink to="/lovelace-front-end" primary="LandingPage" icon={<HomeIcon />} />
        <ListItemLink to="/lovelace-front-end/homepage" primary="Homepage" icon={<HomeIcon />} />
        <ListItemLink to="/lovelace-front-end/feedback" primary="Feedback" icon={<CheckIcon />} />
        <ListItemLink to="/lovelace-front-end/assignments" primary="Assignments" icon={<BookIcon />} />
        <ListItemLink to="/lovelace-front-end/students" primary="StudentsList" icon={<BookIcon />} />
      </div>
    );
  }
}

export default LinksList;