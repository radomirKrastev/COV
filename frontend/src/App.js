import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CovidQuestionnaire from './components/CovidQuestionnaire';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={CovidQuestionnaire} />
    </Switch>
  </BrowserRouter>
);

export default App;
