import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];

function Home() {
    console.log('SWITHCED');
  return (
    <React.Fragment>
    
    <div>
        Hello 
      </div>


  </React.Fragment>
  );
}

export default Home;
