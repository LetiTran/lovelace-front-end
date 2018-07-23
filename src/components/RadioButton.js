import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row' 
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'students',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.displayFormCallBack();
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{justifyContent: "center"}} className={classes.root}>
        <FormControl  component="fieldset" required error className={classes.formControl}>
          <h5 >Select type of user to be invited</h5>
          <RadioGroup
            aria-label="invites"
            name="invites2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="students" control={<Radio color="primary" />} label="Students" />
            <FormControlLabel value="Instructors" control={<Radio color="primary" />} label="Instructors" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
          {/* <FormHelperText>You can display an error</FormHelperText> */}
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);