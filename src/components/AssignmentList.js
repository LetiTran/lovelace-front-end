import React, { Component } from 'react';
import Repo from './Repo.js'

// For Redux:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAssignmentList} from '../actions';

// For Styles:
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AssignmentList extends Component {

componentDidMount(){
    console.log('Called componentDidMount for assignments')
    this.props.fetchAssignmentList()
    }

  renderAssignmentList = () => {
    console.log('assignmentList in renderAssignmentList: ' )
    console.log(this.props.assignmentList)
    return this.props.assignmentList.map((repo, index) => {
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

    const styles =  {
        root: {
          width: '100%',
          marginTop: 10,
          overflowX: 'auto',
        },
        table: {
          minWidth: 700,
        },
      };

    console.log('assignments: ' + this.props.assignments)
    return (
    <section style={styles.root}>
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Repo URL</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Pulls URL</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {this.renderAssignmentList()}
        </TableBody>
      </Table>
    </Paper>

    </section>
    );
  }
}

function mapStateToProps(state) {
  console.log('function mapStateToProps:' )
    console.log(state.assignmentList)
    return {
    assignmentList: state.assignmentList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAssignmentList}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);
