import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import UserInvitesForm from '../../components/UserInvitesForm.js'
import CreateNewInstructor from '../../components/CreateNewInstructor.js'
import EditInstructor from  '../../components/EditInstructor.js'
import EditCohort from '../../components/EditCohort.js'
import EditClassroom from '../../components/EditClassroom.js'
import EditStudent from '../../components/EditStudent.js'

import {
    ExpansionPanel ,
    ExpansionPanelDetails, 
    ExpansionPanelSummary, 
    Typography, 
    ExpandMoreIcon}
    from '../../components-info/MaterialUiImports'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class AdminPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root} >
        <ExpansionPanel style={{borderLeft: "green 2px solid"}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Send Users Invites</Typography>
            {/* <Typography className={classes.secondaryHeading}>Secondary title if we decide need it</Typography> */}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <UserInvitesForm />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel style={{borderLeft: "green 2px solid"}} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Add Instructors</Typography>
            {/* <Typography className={classes.secondaryHeading}>
              put it here if decide that we need it
            </Typography> */}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CreateNewInstructor />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel style={{borderLeft: "green 2px solid"}} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Edit Instructors</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditInstructor/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel style={{borderLeft: "green 2px solid"}} expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Edit Cohort</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditCohort/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel style={{borderLeft: "green 2px solid"}} expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Edit Classroom</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditClassroom/>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel style={{borderLeft: "green 2px solid"}} expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Edit Student</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditStudent/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

AdminPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminPanels);