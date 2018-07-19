import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {
    Grid,
    TextField
} from '../components-info/MaterialUiImports'

class InputWithGrid extends Component {

  render() {
    return (
            <Grid container spacing={8} alignItems="flex-end">
            <Grid md item>
                <TextField fullWidth={true} label={this.props.name} />
            </Grid>
            </Grid>
    );
  }
}

export default InputWithGrid;