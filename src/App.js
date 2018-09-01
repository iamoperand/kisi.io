import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import routes from './config/routes';

import Home from './components/Home';
import ManageLocks from './components/ManageLocks';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.Home} component={Home} />
          <Route path={routes.ManageLocks} component={ManageLocks} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
