import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';


class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { icon, primary } = this.props;
    return (
      <ListItem button component={this.renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    );
  }
}

ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired, // icon. See material-ui docs
  primary: PropTypes.node.isRequired, // text displayed
  to: PropTypes.string.isRequired, // local link url
};

export default ListItemLink;