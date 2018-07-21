import React from 'react';
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

//  TODO: right now it will not update the state of the dates if no change on form happen for that particular DatePicker 

function DatePickers(props) {


function handleChange(event)  {
  if
  (props.element === "newCohortClassStartDate"){
    props.storeNewCohortClassStartDate(event.target.value);
  }else if
  (props.element === "newCohortClassEndDate"){
    props.storeNewCohortClassEndDate(event.target.value);
  }else if
  (props.element === "newCohortIntStartDate"){
    props.storeNewCohortIntStartDate(event.target.value);
  }else if
  (props.element === "newCohortIntEndDate"){
    props.storeNewCohortIntEndDate(event.target.value);
  }else if
  (props.element === "newCohortGradDate"){
    props.storeNewCohortGradDate(event.target.value);
  }
   
 };

  const { classes } = props;
    // const name = props.text
  return (
    <form className={classes.container} style={{marginTop:"5px"}} noValidate>
      <TextField
        onChange={handleChange}
        style={{marginLeft:"0", marginRight:"0", width:"100%"}} 
        id="date"
        label={props.text}
        type="date"
        defaultValue="SelectDate"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
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
    storeNewCohortGradDate
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(DatePickers))

// export default connect(mapStateToProps, mapDispatchToProps)(DatePickers);
