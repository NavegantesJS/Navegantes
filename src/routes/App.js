import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css';
import MainLayout from '../layouts/MainLayout';
import Home from '../containers/Home';
import '../styles/utils/App.scss';

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
