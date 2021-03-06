import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',

    // backgroundColor: "#669933",
  },
  chip: {
    margin: theme.spacing.unit,
    color: "#F8F8F8",
    backgroundColor: "#669933",
    width: 300
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip
        label="Home"
        className={classes.chip}
        href="/lovelace-front-end"
        clickable
      />
          <Chip
        label="Textbook(GitHub)"
        className={classes.chip}
        href="https://github.com/Ada-Developers-Academy/textbook-curriculum"
        clickable
      />
          <Chip
        label="Ada Website"
        className={classes.chip}
        href="https://www.adadevelopersacademy.org/"
        clickable
      />
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
