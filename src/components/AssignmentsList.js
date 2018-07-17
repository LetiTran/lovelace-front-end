import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Repo from './Repo.js'

import {fetchAssignmentsList} from '../actions';

class Assignments extends Component {

componentDidMount(){
    console.log('Called componentDidMount for assignments')
    this.props.fetchAssignmentsList()
    }

  renderAssignmentsList = () => {
    console.log('assignmentsList in renderAssignmentsList: ' )
    console.log(this.props.assignmentsList)
    return this.props.assignmentsList.map((repo, index) => {
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
    )
   });
}


  render() {
    console.log('assignments: ' + this.props.assignments)
    return (
      <section style={{textAlign:"center"}}>
        <div>Assignments</div>
        {this.renderAssignmentsList()}
      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log('function mapStateToProps:' )
    console.log(state.assignmentsList)
    return {
    assignmentsList: state.assignmentsList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAssignmentsList}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(Assignments);
