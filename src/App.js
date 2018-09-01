import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './config/routes';
import store from './store';

import Home from './components/Home';
import ManageLocks from './components/ManageLocks';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={routes.Home} component={Home} />
            <Route path={routes.ManageLocks} component={ManageLocks} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
