import React, { Component } from 'react';
// import ReactMarkdown from "react-markdown"; TODO: figure out how to uninstall
import MarkdownElement from "@material-ui/docs/MarkdownElement";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/es/Card";
import GridContainer from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/es/Typography/Typography";
import CodeIcon from "@material-ui/icons/es/Code";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import FormGroup from "@material-ui/core/es/FormGroup/FormGroup";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/es/Switch/Switch";
import axios from 'axios';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";

let initialSourcetwo = '# Task List\r\n## What We\'re Looking For\r\n\r\nFeature | Feedback\r\n:------------- | :-------------\r\n**Baseline** | \r\nAppropriate Git Usage with no extraneous files checked in | Good number of commits and commit messages\r\nAnswered comprehension questions | Check, Strong Params actually ensure that no unexpected fields are inserted in creation or update operations.  Familiarity with routes & styling will come with practice.  If you have a specific question, send it on to me.  \r\nSuccessfully handles: Index, Show | Check\r\nSuccessfully handles: New, Create | Check.\r\nSuccessfully handles: Edit, Update | Check\r\nSuccessfully handles: Destroy, Task Complete | Check\r\nRoutes follow RESTful conventions | Check\r\nUses named routes (like `_path`) | Check\r\nUses partial views to DRY the new and edit forms | Check\r\n**Overall** | Nicely done.  The site works and does everything expected.  The styling looks good without being too fancy. \r\n';

class MarkdownFeedback extends Component {

constructor(props) {
  super(props);
  this.state = {
    auth: true,
    feedback: initialSourcetwo,
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

  renderContentsList = () => {
    return this.state.contentsList.map((githubContent, index) => {
      return (
          <ListItem
              dense={true}
              key={githubContent.path}
              index={index}
              type={githubContent.type}
              onClick={()=> window.open(githubContent.html_url, "_blank")}
          >{githubContent.name}</ListItem>
      )
    });
  };

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


  render() {
    const { feedback } = this.state.feedback;
    return (
        <section>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <CardHeader
                    avatar={<Avatar ><CodeIcon /></Avatar>}
                    title={<h1>Foo</h1>}
                />
            <CardContent>
                <Input
                    id="md-feedback"
                    fullWidth={true}
                    multiline="true"
                    value={this.state.feedback}
                    onChange={this.updateFeedback}


                />
              </CardContent>
              </Card>
            </Grid>
          <Grid item xs={12} sm={12} md={6}>
              <Card>
                <CardHeader>
                  <div color="rose">
                    <CodeIcon />
                  </div>
                  <h4>Foo</h4>
                </CardHeader>
                <CardContent>
                <MarkdownElement text={this.state.feedback} />;
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>

    )
  }
}

//   render() {
//     // const { feedback } = this.state.feedback;
//     const { auth, feedback } = this.state;
//     const foo =
//       this.state.auth ? <Input
//         id="md-feedback"
//         fullWidth={true}
//         multiline={true}
//         value={this.state.feedback}
//         onChange={this.updateFeedback}
//
//
//     /> : <MarkdownElement text={this.state.feedback} />;
//
//     return (
//       <section >
//         <FormGroup row>
//           <FormControlLabel
//               control={
//                 <Switch checked={this.state.auth} onChange={this.handleChange} aria-label="LoginSwitch" />
//               }
//               label={this.state.auth ? "Form" : "Preview"}
//           />
//         </FormGroup>
//         <Grid container spacing={24}>
//           <Grid item xs={12} sm={12} md={6}>
//             <Card>
//               <CardContent>{foo}</CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={12} md={6}>
//             <Card>
//               <CardContent>
//           <List style={{
//             position: "relative",
//
//             overflow: "scroll",
//             maxHeight: "60vh"
//           }}
//                 >
//             {this.renderContentsList()}
//           </List>
//               </CardContent>
//             </Card>
//         </Grid>
//         </Grid>
//       </section>
//     )
//   }
// }

// or https://material-ui.com/demos/dialogs/


export default MarkdownFeedback;
