import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 import { 
  ListItem,
  ListItemIcon, 
  ListItemText, 
} from '../components-info/MaterialUiImports'


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