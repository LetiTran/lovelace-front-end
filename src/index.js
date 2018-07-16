import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import tasks from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from  './routes/index.jsx'

let hist = createBrowserHistory();

const store = createStore(
    tasks,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


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