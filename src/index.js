import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from  './routes/index.jsx'

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers';

import {fetchClassroomList, fetchCohortList} from './actions';


// create store and 'asyncly' fetch cohort and classrooms:
// const store = createStore(rootReducer);
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )

  store.dispatch(function (dispatch) {
    fetchClassroomList(() => {
      dispatch({ type: 'GET_CLASSROOM_LIST' })
    })
    fetchCohortList(() => {
        dispatch({ type: 'GET_COHORT_LIST' })
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