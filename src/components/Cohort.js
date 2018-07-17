import React, { Component } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCohort} from '../actions';

class Cohort extends Component {

    

  renderCohortList = () => {
    console.log('cohortList in renderCohortList: ' )
    console.log(this.props.cohortList)
    return this.props.cohortList.map((cohort, index) => {
       return (
       <MenuItem key={index} value={cohort.id}> {cohort.name} </MenuItem>
       );
   });
}

 handleChange = (event) => {
    this.props.changeCohort(event.target.value)
    // this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log('cohort: ' + this.props.cohort)

    const cohort = this.props.cohort;

 

    return (
   
      <section style={{textAlign:"center"}}>
        <div>Cohort</div>
        <form  autoComplete="off">
        <FormControl >
          <InputLabel htmlFor="change-cohort"></InputLabel>
          <Select
            value={cohort}
            onChange={this.handleChange}
            inputProps={{
              name: 'cohort',
              id: 'change-cohort',
            }}
          >
            {this.renderCohortList()}
          </Select>
        </FormControl>
        </form>

      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log('function mapStateToProps:' )
  console.log(state.cohort)
    console.log(state.cohortList)
    return {
    cohort: state.cohort,
    cohortList: state.cohortList
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeCohort}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cohort);
