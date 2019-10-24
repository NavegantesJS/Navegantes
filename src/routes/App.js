import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
