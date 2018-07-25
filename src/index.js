import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// For Routes:
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from  './routes/index.jsx'

// For Redux:
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import {
    fetchClassroomList, 
    fetchCohortList, 
    fetchAssignmentList,
    fetchStudentsList,
    fetchInstructorsList,
    fetchSubmissionList
    } from './actions';


// creating store with thunk to be able to fetch cohort and classrooms on componentDidMount in:
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

store.dispatch(function (dispatch) {
    fetchClassroomList(() => {
        dispatch({ type: 'GET_CLASSROOM_LIST' })
    })
    fetchCohortList(() => {
        dispatch({ type: 'GET_COHORT_LIST' })
        })
    fetchAssignmentList(() => {
        dispatch({ type: 'GET_ASSIGNMENT_LIST' })
        })
    fetchStudentsList(() => {
        dispatch({ type: 'GET_STUDENT_LIST' })
        })    
    fetchInstructorsList(() => {
        dispatch({ type: 'GET_INSTRUCTORS_LIST' })
        })   
    fetchStudentsList(() => {
        dispatch({ type: 'GET_STUDENTS_LIST' })
        })        
    fetchSubmissionList(()=> {
        dispatch({type: 'GET_SUBMISSIONS_LIST'})
    })    
})

let hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
      <Router history={hist}>
               <App>
                    <Switch>
                    {indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} key={key} component={prop.component} />;
                    })}
                    </Switch>
                </App>
            </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();