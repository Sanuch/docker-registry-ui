import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Page from './components/Page';

const Fragment = React.Fragment;

const App: React.FC = () => {
  return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Page}/>
          </Switch>
        </Fragment>
      </Router>
  );
};

export default App;
