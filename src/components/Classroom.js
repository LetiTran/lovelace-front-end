import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeClassroom} from '../actions';

class Classroom extends Component {
  renderClassroomList = () => {
    return this.props.classroomList.map((classroom) => {
       return (
       <MenuItem value={classroom}> {classroom} </MenuItem>
       );
   });
}

 handleChange = (event) => {
    this.props.changeClassroom(event.target.value)
    // this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const changeClassroomButton = (
      <Button size="small" onClick={()=>this.props.changeClassroom(this.props.classroom)}>Change Classroom</Button> 
    )



    return (
    
      <div>
          {changeClassroomButton}
          <div>Classroom: {this.props.classroom}</div>

          <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-classroom">Classroom</InputLabel>
          <Select
            value={this.props.classroom}
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

      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log('function mapStateToProps:')
    return {
    classroom: state.classroom,
    classroomList: state.classroomList
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeClassroom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);