import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from "components/Home";
import ImageInfo from "components/ImageInfo";
import DefaultLayout from "components/Page/DefaultLayout";

const App: React.FC = () => {
  return (
      <Router>
        <Fragment>
          <Switch>
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout path="/:image" component={(matchedProps: any) => {
                const { computedMatch: { params: props } } = matchedProps;
                return (<ImageInfo {...props} />);
            } } />
          </Switch>
        </Fragment>
      </Router>
  );
};

export default App;
