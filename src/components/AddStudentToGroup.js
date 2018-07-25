import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// For Styles:
 import { 
    ListItem,
    ListItemText, 
    IconButton, 
    WorkIcon,
    ListItemSecondaryAction
} from '../components-info/MaterialUiImports'
import { Button } from '../../node_modules/@material-ui/core/es';


class AddStudentToGroup extends Component {

  render() {
    return (
        <ListItem>
        <ListItemText
          primary={this.props.name}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Add" onClick={this.props.addStudentToGroup}>
            <p style={{fontSize:"0.5em"}}>Add</p>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>


    //   <TableRow>
    //     <TableCell onClick={this.handleClickOpen('paper')}>{this.props.name}</TableCell>
    //   </TableRow>

       
    )
  }
}

AddStudentToGroup.propTypes = {
  // TODO: write proTypes....
}

export default AddStudentToGroup;

