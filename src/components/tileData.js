import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import CheckIcon from '@material-ui/icons/Done';
import SchoolIcon from '@material-ui/icons/School';

// This file manages the icons and text for the sidebar.
// For more buttons, see https://material.io/tools/icons/?style=baseline

export const mailFolderListItems = (
    <section>
      {/*home button*/}
      <ListItem button>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      {/*GitHub textbook button*/}
      <ListItem button>
        <ListItemIcon><BookIcon /></ListItemIcon>
        <ListItemText primary="Textbook" />
      </ListItem>
      {/* Grades button*/}
      <ListItem button>
        <ListItemIcon><CheckIcon /></ListItemIcon>
        <ListItemText primary="Grades" />
      </ListItem>
      {/* Ada button*/}
      <ListItem button>
        <ListItemIcon><SchoolIcon /></ListItemIcon>
        <ListItemText primary="Ada" />
      </ListItem>
    </section>
);
