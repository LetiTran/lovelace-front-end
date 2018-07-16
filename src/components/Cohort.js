import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCohort} from '../actions';

class Cohort extends Component {

  render() {

    const changeCohortButton = (
      <Button size="small" onClick={()=>this.props.changeCohort(this.props.cohort)}>Change Cohorts</Button> 
    )
    return (
    
      <div>
          {changeCohortButton}
          <div>Cohort: {this.props.cohort}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log('function mapStateToProps')
    return {
    cohort: state.cohort
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({changeCohort}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cohort);