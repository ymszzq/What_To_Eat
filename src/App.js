import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainFood from './component/mainFood'
import Nav from './component/Nav'
import UpdateRestaurant from './component/updateRestaurant'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <MainFood/>
      <UpdateRestaurant/>
    </div>
  );
}

export default App;
