import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome.js'
class App extends Component {
  render() {
  
  let user = {
    name : "Brian",
    id : "XC2247"
  }
  function convertName(user){
    return user.name + ":" + user.id;
  }

  const element = (
    <div>
      <p>Info {convertName(user)}</p>
    </div>
  );

  const ele = React.createElement(
    'h1',
    {className: 'greeting'},
    'Despacito'
  )
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ChickenReact App</h2>
        </div>
        <div>
            {element}
            {convertName(user)}
            {ele}
        </div>
        <Welcome name="Angdre"/>
      </div>
    );
  }
}

export default App;
