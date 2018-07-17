import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Repo extends Component {

  render() {
    //   const startDate = this.repo.startDate
      const repoUrl = this.props.repoUrl
    //   const dueDate = this.this.props.dueDate
    //   const individual = this.this.props.individual

    return (
        <TableRow>
            <TableCell> Put Name</TableCell>
            <TableCell onClick={this.props.onClick}> {repoUrl} </TableCell> 
            <TableCell>Put Language</TableCell>
            <TableCell>Put Due Date</TableCell>
            <TableCell>Put Pulls URL</TableCell>
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
