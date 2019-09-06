import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from "components/Home";
import Image from "components/Image";
import DefaultLayout from "components/Page/DefaultLayout";

const Fragment = React.Fragment;

const App: React.FC = () => {
  return (
      <Router>
        <Fragment>
          <Switch>
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout path="/:image" component={(matchedProps: any) => {
                const { computedMatch: { params: props } } = matchedProps;
                return (<Image {...props} />);
            } } />
          </Switch>
        </Fragment>
      </Router>
  );
};

export default App;
