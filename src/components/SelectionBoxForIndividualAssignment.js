import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


import {storeNewAssignmentIndividual} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class SelectionBoxForIndividualAssignment extends React.Component {
  state = {
    checked: true,
  };

  handleChange = name => event => {
    console.log('event.target.checked')
    // console.log(event.target.checked)
    // this.setState({ [name]: event.target.checked });

    this.setState({ [name]: event.target.checked });
    // console.log(this.state.checked)
    this.props.storeNewAssignmentIndividual(this.state.checked)

  };
  render() {
    console.log(this.state.checked )
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange('checked')}
              value="checked"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="INDIVIDUAL ASSIGNMENT"
        />
        
      </FormGroup>
    );
  }
}

SelectionBoxForIndividualAssignment.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapDispatchToProps(dispatch){
  return bindActionCreators({storeNewAssignmentIndividual}, dispatch)
}


export default  connect(null, mapDispatchToProps)(withStyles(styles)(SelectionBoxForIndividualAssignment));


// function mapStateToProps(state) {
//   return {
//       newAssignmentIndividual: state.newAssignmentIndividual
//       }
// }



