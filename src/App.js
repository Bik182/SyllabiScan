import logo from './logo.svg';
import React from 'react';
import  Home  from './components/Home.js';
import  Calendars  from './components/Calendars.js';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
function App() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Switch>
  <Route exact path="/home" component={Home} />
  <Route exact path="/calendars" component={Calendars} />

  
</Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
