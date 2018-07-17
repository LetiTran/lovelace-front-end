import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Repo from './Repo.js'

import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/es/List/List";


export default class ReposList extends Component {

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
        onClick={()=> window.open(repo.repo_url, "_blank")}
        repoUrl={repo.repo_url}
        startDate={repo.start_date} 
        dueDate={repo.due_date}
        individual={repo.individual}
        // Add this ones later on rails db and here too:
        // external_id={repo.id}
        // name={repo.name}
        // language={repo.language}
        // pulls_url={repo.pulls_url}
      />
    );
  });
}

  componentDidMount() {
    axios.get(`http://localhost:3000/assignmentsapi`)
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


