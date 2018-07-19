import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCohort} from '../actions';

import { InputLabel, 
  MenuItem, 
  FormControl, 
  Select
 } from '../components-info/MaterialUiImports'
 

class ChooseCohortForInvitesForm extends Component {

  renderCohortList = () => {
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
    return {
    cohortList: state.cohortList
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeCohort}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCohortForInvitesForm);
