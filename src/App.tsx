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
            <DefaultLayout path="/:image" /*render={(props: any) => <Image {...props.match.params}/>} */ component={Image} />
            <DefaultLayout exact path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
  );
};

export default App;
