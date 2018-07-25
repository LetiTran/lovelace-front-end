import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// For Redux:
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchStudentsList} from '../actions';

// For Styles:
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Paper,
  Typography ,
  List,
  ListItem,
  ListItemText
} from '../components-info/MaterialUiImports'


import ListSubheader from '@material-ui/core/ListSubheader';


class ListStudentsGroups extends Component {

    // componentDidMount() {
    //     console.log('Called componentDidMount for studentsGroups')
    //     this.props.studentsGroups()
    // }
      


    renderStudentGroupStudents = (group) => {
        console.log(group)
        return group.map((student,index) => {
            return (
                <ListItem>
                    <ListItemText style={{textAlign: "center", color: "grey"}}
                    secondary={student.name}
                    />
                </ListItem>
            );
            });
    }

    renderStudentGroupsList = () => {
        console.log(this.props.studentsGroups)
        return this.props.studentsGroups.map((group,index) => {
        //  To change it for ALL STUDENTS LIST, swap this two lines:
        //  return this.props.studentsList.map((student,index) => {
        return (
            <List 
            style={{verticalAlign: "top",textAlign: "center"}}
            key={index}
            subheader={<ListSubheader style={{color: "green"}}>Group {index+1}</ListSubheader>}>
            {this.renderStudentGroupStudents(group)}
            </List>
        );
        });
    }

  render() {
    // console.log('students: ' + this.props.assignments)
    
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
    
    return (
    <section style={styles.root}>
    {/* <Typography style={{marginBottom: 20}} variant="title" id="tableTitle">
      Groups {this.props.classroomName}
    </Typography> */}

    <Paper >
      <Table >
        {/* <TableHead>
          <TableRow>
            <TableCell>Groups</TableCell>
          </TableRow>
        </TableHead> */}

        <TableBody>
        {this.renderStudentGroupsList()}
        </TableBody>
      </Table>
    </Paper>

    
    </section>
    )
  }
}

ListStudentsGroups.propTypes = {
  // TODO: write proTypes....
}

function mapStateToProps(state) {
      return {
      studentsList: state.studentsList,
      currentClassroomStudentsToAddToGroupd: state.currentClassroomStudentsToAddToGroupd,
      classroomName: state.currentClassroom.name,
      studentsGroups: state.studentsGroups
      }
  }
  
  function mapDispatchToProps(dispatch) {
      return bindActionCreators({fetchStudentsList}, dispatch)
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListStudentsGroups);
  