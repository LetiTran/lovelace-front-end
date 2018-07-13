import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Repo from './repo.js'

import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/es/List/List";
// import ListItem from "@material-ui/core/es/ListItem/ListItem";
// import Card from "@material-ui/core/es/Card";
// import GridContainer from "@material-ui/core/Grid";
// import CardHeader from "@material-ui/core/CardHeader/CardHeader";


class ReposList extends Component {

constructor(props) {
  super(props);
  this.state = {
    repos: []
  }
}


renderRepoList = () => {
   return this.state.repos.map((repo,index) => {
    return (
      <Repo
        key={index}
        type={repo.type}
        onClick={()=> window.open(repo.html_url, "_blank")}
        external_id={repo.id}
        name={repo.name}
        language={repo.language}
        pulls_url={repo.pulls_url}
      />
    );
  });
}

  componentDidMount() {
    axios.get(`https://api.github.com/users/Ada-C9/repos`)
        .then((response) => {
          console.log(response)
          this.setState({ repos: response.data });
        })
        .catch((error) => {
          console.log({error: error.message});
          this.setState({ error: error.message});
        });
  }


  render() {
    const { repos } = this.state.repos;
    return (
        <section>
          <Grid container >
            <Grid item>
            <List>
            {this.renderRepoList()}
            </List>
            </Grid>
          </Grid>
        </section>

    )
  }
}



export default ReposList;
