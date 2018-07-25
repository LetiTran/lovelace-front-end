// For Redux:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from '../../actions';

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


import SubmissionList from '../../components/SubmissionList.js'

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
    width: "98%",
  },
});

class Submission extends React.Component {
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
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="Submission List" />
            <Tab label="Create Submission" />
            <Tab label="Edit Submission" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><SubmissionList /></TabContainer>
          <TabContainer dir={theme.direction}>Create submission</TabContainer>
          <TabContainer dir={theme.direction}>Edit Assignment</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}



Submission.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
      return {
        classroomName: state.currentClassroom.name
      }
  }
  
  function mapDispatchToProps(dispatch) {
      return bindActionCreators({ }, dispatch)
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Submission));