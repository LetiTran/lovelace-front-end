import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';
// import Card from "@material-ui/core/es/Card";
// import GridContainer from "@material-ui/core/Grid";
// import CardHeader from "@material-ui/core/CardHeader/CardHeader";
// import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";

class Repo extends Component {

  render() {
    //   const startDate = this.repo.startDate
      const repoUrl = this.props.repoUrl
    //   const dueDate = this.this.props.dueDate
    //   const individual = this.this.props.individual

    return (
        <section>
            <ListItem onClick={this.props.onClick}>
                {repoUrl}  
            </ListItem>
        </section>

    )
  }
}

Repo.propTypes = {
    // external_id: PropTypes.object.isRequired,
    // name: PropTypes.string.isRequired,
    // language: PropTypes.string.isRequired,
    // pulls_url: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    individual: PropTypes.string.isRequired,
    // external_id: PropTypes.number.isRequired,
}

export default Repo;
