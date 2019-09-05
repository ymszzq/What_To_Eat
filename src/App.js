import React from 'react';
import './App.css';
import MainFood from './component/mainFood'
import Nav from './component/Nav'
import UpdateRestaurant from './component/updateRestaurant'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
      <Switch>
      <Route path="/" exact component={MainFood}></Route>
      <Route path="/add" component={UpdateRestaurant}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
