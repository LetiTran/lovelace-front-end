import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeClassroomOnForm} from '../actions';

import { InputLabel, 
  MenuItem, 
  FormControl, 
  Select,
  Typography
 } from '../components-info/MaterialUiImports'
 

class ChooseClassroomForInvitesForm extends Component {

  renderClassroomList = () => {
    return this.props.classroomList.map((classroom, index) => {
       return (
       <MenuItem key={index} value={classroom.id}> {classroom.name} </MenuItem>
       );
   });
}

 handleChange = (event) => {
    this.props.changeClassroomOnForm(event.target.value)
  };

  render() {

    const classroom = this.props.classroom;

    return (
      <section style={{textAlign:"center"}}>
        <Typography variant="headline" component="h2">
            Select Classroom
          </Typography>
        <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-classroom"></InputLabel>
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

      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log('function mapStateToProps:' )
    return {
    classroomList: state.classroomList
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeClassroomOnForm}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseClassroomForInvitesForm);
