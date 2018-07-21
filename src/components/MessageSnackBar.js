
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';

import { 
    Button,
    CheckCircleIcon ,
    ErrorIcon,
    InfoIcon ,
    CloseIcon,
    green,
    amber,
    IconButton,
    Snackbar,
    SnackbarContent,
    WarningIcon,
   } from '../components-info/MaterialUiImports'
    

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };
  
  const styles1 = theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.dark,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  });
  
  function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];
  
    return (
      <SnackbarContent
        className={classNames(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
        {...other}
      />
    );
  }
  
  MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  };
  
  const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);
  
  const styles2 = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
  });
  
  class CustomizedSnackbars extends React.Component {
    state = {
      open: false,
    };
  
    handleClick = () => {
      this.setState({ open: true });
    };
  
    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      this.setState({ open: false });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <div>
          <Button className={classes.margin} onClick={this.handleClick}>
            Open success snackbar
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <MySnackbarContentWrapper
              onClose={this.handleClose}
              variant="success"
              message={this.props.message}
            />
          </Snackbar>
        </div>
      );
    }
  }
  
  CustomizedSnackbars.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles2)(CustomizedSnackbars);