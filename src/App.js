import logo from './logo.svg';
import React from 'react';
import  Home  from './components/Home.js';
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
  
  
</Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
