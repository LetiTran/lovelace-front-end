// import React, { Component } from 'react';
// import Paper from "@material-ui/core/Paper";
import AssignmentList from '../../components/AssignmentList.js';
import AssignmentSteppers from '../../components/AssignmentSteppers.js'
import EditAssignment from '../../components/EditAssignment.js'
// import Typography from '@material-ui/core/Typography';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "90%",
  },
});

class Assignments extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root} style={{alignItems: "center"}}>
        <AppBar position="static" color="default" >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="Assignment List" />
            <Tab label="Create Assignment" />
            <Tab label="Edit Assignment" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><AssignmentList /></TabContainer>
          <TabContainer dir={theme.direction}><AssignmentSteppers/></TabContainer>
          <TabContainer dir={theme.direction}><EditAssignment/></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Assignments.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Assignments);