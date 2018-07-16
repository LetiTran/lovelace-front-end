import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksPage from './components/TaskPage';
import { createTask, editTask } from './actions';
import Footer from './components/footer.js';
import MiniDrawer from './components/MiniDrawer'
import Grid from "@material-ui/core/es/Grid/Grid";
import Login from "./components/Login";


class App extends Component {

  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  };

  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }));
  };

  onClickLogin = () => {
    this.props
  }

  render() {
    console.log('props from App: ', this.props);
   return (
       <div>
          <MiniDrawer>
            <Grid container>
              <Grid item style={{maxHeight: "85vh", position: "relative", overflow: 'scroll', width:"100%"}}>
                <Login/>
                <TasksPage tasks={this.props.tasks}
                           onCreateTask={this.onCreateTask}
                           onStatusChange={this.onStatusChange}
                />
                  {/*{this.props.children}*/}
                  {/* Children from Router on index.js */}
              </Grid>
            </Grid>
          </MiniDrawer>
          {/*<footer><Footer /></footer>*/}
       </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(App);

// export default App;