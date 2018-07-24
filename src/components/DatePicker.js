// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '../components-info/MaterialUiImports'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  storeNewCohortClassStartDate,
  storeNewCohortClassEndDate,
  storeNewCohortIntStartDate,
  storeNewCohortIntEndDate,
  storeNewCohortGradDate,

  editCohortClassStartDate,
  editCohortClassEndDate,
  editCohortIntStartDate,
  editCohortIntEndDate,
  editCohortGradDate,

} from '../actions';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

//  TODO: right now it will not update the state of the dates if no change on form happen for that particular DatePicker, FIX it!

class DatePickers  extends Component {

  handleChange = (event)  =>{
  if
  (this.props.element === "newCohortClassStartDate"){
    this.props.storeNewCohortClassStartDate(event.target.value);
  }else if
  (this.props.element === "newCohortClassEndDate"){
    this.props.storeNewCohortClassEndDate(event.target.value);
  }else if
  (this.props.element === "newCohortIntStartDate"){
    this.props.storeNewCohortIntStartDate(event.target.value);
  }else if
  (this.props.element === "newCohortIntEndDate"){
    this.props.storeNewCohortIntEndDate(event.target.value);
  }else if
  (this.props.element === "newCohortGradDate"){
    this.props.storeNewCohortGradDate(event.target.value);
  }else if
  (this.props.element === "updateCohortClassStartDate") {
    console.log('yes')
    this.props.editCohortClassStartDate(event.target.value)
  }else if
  (this.props.element === "updateCohortClassEndDate") {
    this.props.editCohortClassEndDate(event.target.value)
  }else if
  (this.props.element === "updateCohortIntStartDate") {
    this.props.editCohortIntStartDate(event.target.value)
  }else if
  (this.props.element === "updateCohortIntEndDate") {
    this.props.editCohortIntStartDate(event.target.value)
  }else if
  (this.props.element === "updateCohortGradDate") {
    this.props.editCohortGradDate(event.target.value)
  }
   
 };
render() {
  console.log('props:...')
  console.log(this.props)
  const { classes } = this.props;
    // const name = this.props.text
  return (
    <form className={classes.container} style={{marginTop:"5px"}} noValidate>
      <TextField
        onChange={this.handleChange}
        style={{marginLeft:"0", marginRight:"0", width:"100%"}} 
        id="date"
        label={this.props.text}
        type="date"
        defaultValue="2018-05-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ 
    storeNewCohortClassStartDate,
    storeNewCohortClassEndDate,
    storeNewCohortIntStartDate,
    storeNewCohortIntEndDate,
    storeNewCohortGradDate,

    editCohortClassStartDate,
    editCohortClassEndDate,
    editCohortIntStartDate,
    editCohortIntEndDate,
    editCohortGradDate,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(DatePickers))
