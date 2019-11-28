import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css';
import Home from '../containers/Home';
import Results from '../containers/Results';
import '../styles/utils/App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resultado" component={Results} />
    </Switch>
  </BrowserRouter>
);

export default App;
