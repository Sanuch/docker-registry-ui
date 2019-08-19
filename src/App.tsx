import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "components/Home";
import Image from "components/Image";

const Fragment = React.Fragment;

const App: React.FC = () => {
  return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/:image" render={props => <Image {...props.match.params}/>}/>
          </Switch>
        </Fragment>
      </Router>
  );
};

export default App;
