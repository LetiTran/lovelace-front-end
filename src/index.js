import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from  './routes/index.jsx'

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

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