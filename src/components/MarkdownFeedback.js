import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import {
 MarkdownElement, 
 Paper, 
 Grid, 
 Card,
 GridContainer,
 CardHeader,
 CardContent, 
 Input,
 Typography, 
 CodeIcon, 
 Avatar, 
 FormGroup, 
 FormControlLabel, 
 Switch,
 List, 
 ListItem,
} from '../components-info/MaterialUiImports'
// import MarkdownElement from '@material-ui/docs'

  // let initialSourcetwo = `# ${this.props.name}\r\n## What We\'re Looking For\r\n\r\nFeature | Feedback\r\n:------------- | :-------------\r\n**Baseline** | \r\nAppropriate Git Usage with no extraneous files checked in | Good number of commits and commit messages\r\nAnswered comprehension questions | Check, Strong Params actually ensure that no unexpected fields are inserted in creation or update operations.  Familiarity with routes & styling will come with practice.  If you have a specific question, send it on to me.  \r\nSuccessfully handles: Index, Show | Check\r\nSuccessfully handles: New, Create | Check.\r\nSuccessfully handles: Edit, Update | Check\r\nSuccessfully handles: Destroy, Task Complete | Check\r\nRoutes follow RESTful conventions | Check\r\nUses named routes (like '_path') | Check\r\nUses partial views to DRY the new and edit forms | Check\r\n**Overall** | Nicely done.  The site works and does everything expected.  The styling looks good without being too fancy. \r\n`


class MarkdownFeedback extends Component {

constructor(props) {
  console.log(props)
  console.log(props.feedback)
  // console.log(this.props.feedback)

  super(props);
  this.state = {
    auth: true,
    feedback: props.feedback,
    contentsList: []
  }
}

  updateFeedback = (event) => {
    console.log(event);
    let updatedField = {feedback: event.target.value};
    this.setState(updatedField);
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  // renderContentsList = () => {
  //   return this.state.contentsList.map((githubContent, index) => {
  //     return (
  //         <ListItem
  //             dense={true}
  //             key={githubContent.path}
  //             index={index}
  //             type={githubContent.type}
  //             onClick={()=> window.open(githubContent.html_url, "_blank")}
  //         >{githubContent.name}</ListItem>
  //     )
  //   });
  // };

  componentDidMount() {
    axios.get(`https://api.github.com/repos/kschumy/TaskList/contents`)
        .then((response) => {
          this.setState({ contentsList: response.data });
        })
        .catch((error) => {
          console.log({error: error.message});
          this.setState({ error: error.message});
        });
  }


//   render() {
//     console.log(this.state)
//     console.log(this.state.feedback)
//     // console.log()
//     const { feedback } = this.state.feedback;
//     return (
//         <section>
//           <Grid container spacing={24}>
//             <Grid item xs={12} sm={12} md={6}>
//               <Card>
//                 <CardHeader
//                     avatar={<Avatar ><CodeIcon /></Avatar>}
//                     title={<h1>Feedback</h1>}
//                 />
//               <CardContent>
//                   <Input
//                     id="md-feedback"
//                     fullWidth={true}
//                     multiline={true}
//                     value={feedback}
//                     onChange={feedback}
//                   />
//                   {this.props.initialSourcetwo}
//                   <Input
//                     id="md-feedback"
//                     fullWidth={true}
//                     multiline={true}
//                     value={this.state.feedback}
//                     onChange={this.updateFeedback}
//                   /> 
//                 </CardContent>
//               </Card>
//             </Grid>
//           <Grid item xs={12} sm={12} md={6}>
//               <Card>
//                 <CardHeader>
//                   <div color="#669933">
//                     <CodeIcon />
//                   </div>
//                   <h4>Foo</h4>
//                 </CardHeader>
//                 <CardContent>
//                 <MarkdownElement text={this.state.feedback} />;
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </section>

//     )
//   }
// }

  render() {
    // const { feedback } = this.state.feedback;
    // const { auth, feedback } = this.state;
    const feedbackContent =
      !(this.state.auth) ? <Input
        id="md-feedback"
        fullWidth={true}
        multiline={true}
        value={this.state.feedback}
        onChange={this.updateFeedback}


    /> : <MarkdownElement text={this.state.feedback} />;

    return (
      <section >
        <FormGroup row>
          <FormControlLabel
              control={
                <Switch checked={this.state.auth} onChange={this.handleChange} aria-label="TextSwitch" />
              }
              label={this.state.auth ? "Preview" : "Preview"}
          />
        </FormGroup>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12}>
            {/* <Card> */}
              <CardContent>{feedbackContent}</CardContent>
            {/* </Card> */}
          </Grid>
          {/* <Grid item xs={12} sm={12} md={6}> */}
            {/* <Card>
              <CardContent>
          <List style={{
            position: "relative",
            overflow: "scroll",
            maxHeight: "60vh"
          }}
                >
            {this.renderContentsList()}
          </List>
              </CardContent>
            </Card> */}
        {/* </Grid> */}
        </Grid>
      </section>
    )
  }
}

// or https://material-ui.com/demos/dialogs/


export default MarkdownFeedback;
