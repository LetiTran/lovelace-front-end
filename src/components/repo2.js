import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { 
 TableCell,
 TableRow,
 
} from '../components-info/MaterialUiImports'

class Repo extends Component {

  render() {
    //   const startDate = this.repo.startDate
      const repoUrl = this.props.repoUrl
    //   const dueDate = this.this.props.dueDate
    //   const individual = this.this.props.individual

    return (
        <TableRow>
            <TableCell> {this.props.name}</TableCell>
            <TableCell onClick={this.props.onRepoClick} > {repoUrl} </TableCell> 
            <TableCell>{this.props.dueDate}</TableCell>
            <TableCell onClick={this.props.onPullsClick} >{this.props.pullsUrl}</TableCell>
            {/* <ListItemLink to="/feedback" primary="Feedback" icon={<BookIcon />} /> */}

            

        </TableRow>

    )
  }
}

Repo.propTypes = {
    // external_id: PropTypes.object.isRequired,
    // name: PropTypes.string.isRequired,
    // language: PropTypes.string.isRequired,
    // pulls_url: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
    // startDate: PropTypes.string.isRequired,
    // dueDate: PropTypes.string.isRequired,
    // individual: PropTypes.string.isRequired,
    // external_id: PropTypes.number.isRequired,
}

export default Repo;
