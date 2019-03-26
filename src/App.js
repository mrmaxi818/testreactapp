import React, { Component } from 'react';
import './App.css';
import Home from './containers/home';
import Profile from './containers/profile';

import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default App;
