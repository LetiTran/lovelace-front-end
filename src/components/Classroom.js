import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeClassroom} from '../actions';

class Classroom extends Component {


  renderClassroomList = () => {
    console.log('classrommList in renderClassroomList: ' )
    console.log(this.props.classroomList)
    return this.props.classroomList.map((classroom, index) => {
       return (
       <MenuItem key={index} value={[classroom.id, classroom.name]}> {classroom.name} </MenuItem>
       );
   });
}

 handleChange = (event) => {
    this.props.changeClassroom(event.target.value)
    // this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log('classroom: ' )
    console.log(this.props.classroomName)

    const classroomName = this.props.classroomName;
   
    return (
   
      <section style={{textAlign:"center"}}>
        <div>Classroom</div>
          <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-classroom">{classroomName}</InputLabel>
          <Select
            value={classroomName}
            onChange={this.handleChange}
            inputProps={{
              name: 'classroom',
              id: 'change-classroom',
            }}
          >
            {this.renderClassroomList()}
          </Select>
        </FormControl>
        </form>

      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log('function mapStateToProps:' )
  console.log(state)
    return {
    classroomId: state.currentClassroomId,
    classroomName: state.currentClassroomName,
    classroomList: state.classroomList
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeClassroom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
