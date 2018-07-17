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
    console.log('classrommList in renderClassroomList: ' )
    console.log(this.props.classroomList)
    return this.props.classroomList.map((classroom, index) => {
       return (
       <MenuItem key={index} value={classroom.id}> {classroom.name} </MenuItem>
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

    console.log('classroom: ' + this.props.classroom)

    const classroom = this.props.classroom;

    return (
   
      <div>
          {changeClassroomButton}
          <div>Classroom: {classroom}</div>

          <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-classroom">Classroom</InputLabel>
          <Select
            value={classroom}
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
  console.log('function mapStateToProps:' )
  console.log(state.classroom)
    console.log(state.classroomList)
    return {
    classroom: state.classroom,
    classroomList: state.classroomList
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeClassroom}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);




{/* <div>
{changeClassroomButton}
<div>Classroom: {classroom}</div>

<form  autoComplete="off">
<FormControl >
<InputLabel htmlFor="change-classroom">Classroom</InputLabel>
<Select
  value={classroom}
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

</div> */}