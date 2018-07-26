import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {changeGroupSize} from '../actions/index.js'
import { FormLabel } from '../../node_modules/@material-ui/core';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class GroupSize extends React.Component {
  state = {
    size: this.props.groupSize,
    open: false,
  };

  handleChange = event => {
    this.props.changeGroupSize(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off" style={{textAlign: "right"}}>
        <FormControl className={classes} style={{textAlign: "right"}}>
          <FormLabel htmlFor="group-size">Group Size</FormLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.size}
            onChange={this.handleChange}
            inputProps={{
              name: 'size',
              id: 'group-size',
            }}
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

GroupSize.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(GroupSize);

function mapStateToProps(state) {
    return {
        groupSize: state.groupSize,
        }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeGroupSize}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupSize);

