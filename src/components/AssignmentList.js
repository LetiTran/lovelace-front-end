import React, { Component } from 'react';
import Repo from './Repo.js'

// For Redux:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAssignmentList} from '../actions';

// For Styles:
 import { 
  Table, 
  TableBody , 
  TableCell , 
  TableHead , 
  TableRow , 
  Paper 
} from '../components-info/MaterialUiImports'

class AssignmentList extends Component {

componentDidMount(){
    // console.log('Called componentDidMount for assignments')
    this.props.fetchAssignmentList()
    }

  renderAssignmentList = () => {
    // console.log('assignmentList in renderAssignmentList: ' )
    // console.log(this.props.assignmentList)
    return this.props.assignmentList.map((repo, index) => {
       return (
       
        <Repo
            key={index}
            type={repo.type}
            onRepoClick={()=> window.open(`https://github.com/Ada-C9/${repo.repo_url} `, "_blank")}
            repoUrl={`https://github.com/Ada-C9/${repo.repo_url} `}
            startDate={repo.start_date} 
            dueDate={repo.due_date}
            individual={repo.individual}
            // Add this ones later on rails db and here too:
            // external_id={repo.id}
            name={repo.name}
            // language={repo.language}
            pullsUrl={`https://github.com/Ada-C9/${repo.repo_url} `}
            // https://github.com/Ada-C9/rails-debugging
            onPullsClick={()=> window.open(`https://github.com/Ada-C9/${repo.repo_url}/pulls `, "_blank")}

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

    // console.log('assignments: ' + this.props.assignments)
    return (
    <section style={styles.root}>
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Repo URL</TableCell>
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
    return {
    assignmentList: state.assignmentList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAssignmentList}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);
