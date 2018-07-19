import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '../components-info/MaterialUiImports'

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

function DatePickers(props) {
  const { classes } = props;
    // const name = props.text
  return (
    <form className={classes.container} style={{marginTop:"5px"}} noValidate>
      <TextField
      style={{marginLeft:"0", marginRight:"0", width:"100%"}} 
        id="date"
        label={props.text}
        type="date"
        defaultValue="2018-08-01"
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

export default withStyles(styles)(DatePickers);