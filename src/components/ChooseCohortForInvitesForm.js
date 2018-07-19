import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCohortOnForm} from '../actions';

import { InputLabel, 
  MenuItem, 
  FormControl, 
  Select,
  Typography
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
    this.props.changeCohortOnForm(event.target.value)
  };

  render() {
    console.log('cohort: ' + this.props.cohort)

    const cohort = this.props.cohort;

 

    return (
   
      <section style={{textAlign:"center"}}>
        <Typography variant="headline" component="h2">
            Select Cohort
          </Typography>
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
        return bindActionCreators({changeCohortOnForm}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCohortForInvitesForm);
