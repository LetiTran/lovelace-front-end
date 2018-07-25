import React, { Component } from 'react';
// import {createAssignment} from '../actions';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import InputWithGrid from './InputWithGrid.js'
// import MessageSnackBar from '../../components/MessageSnackBar.js';
import SelectionBoxForIndividualAssignment from './SelectionBoxForIndividualAssignment.js'

import { 
    Grid, 
    Button,
   } from '../components-info/MaterialUiImports'

//    export function RenderMessage(message) {
//     if (message){
//     return <MessageSnackBar message={message}/>
//     }
// }


// const renderMessage = RenderMessage;


class CreateAssignment extends Component {


    // createAssignment = () => {
    //     const data = {  
    //         name: this.props.newAssignmentName,
    //         repo_url: this.props.newAssignmentRepoUrl,
    //         individual: this.props.newAssignmentIndividual
    //     }
    
    //     this.props.createAssignment(data)
    //   };

     

  render() {
console.log(this.props.newAssignmentIndividual)
    return (
        <section style={{width: "100%", justify:"center"}}>
        <Grid  alignItems="center" spacing={16} container direction="row" justify="center">
            <Grid  xs={8} item >
            <Grid container spacing={8} alignItems="flex-end">
            <InputWithGrid element="newAssignmentName" name="Name"/>   
            <InputWithGrid element="newAssignmentRepoUrl" name="Repo URL"/>   

            {/* TODO: put select box for indivual or not */}
            </Grid>
            </Grid>
        </Grid>
        <Grid style={{margin:"30px"}} container justify="center">
            {/* <Button onClick={this.createAssignments} style={{width:"300px"}} variant="contained" color="primary" >
                 Create 
            </Button> */}
            <SelectionBoxForIndividualAssignment/>
        </Grid>
        {/* <renderMessage /> */}
        </section>
    );
  }
}

function mapStateToProps(state) {
    return {
        newAssignmentName: state.newAssignmentName,
        newAssignmentRepoUrl: state.newAssignmentRepoUrl,
        newAssignmentIndividual: state.newAssignmentIndividual
        }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({createAssignment}, dispatch)
// }

export default connect(mapStateToProps, null)(CreateAssignment);



