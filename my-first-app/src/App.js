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
  
  function Vector(props){
    return (<div>
        <h1>Vector {props.vector} </h1>
        <Avatar catImg={props.catImg}/>
    </div>);
  }

  function Avatar(props){
    return (<div>
      <img src={props.catImg}/>
    </div>);
  }
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
        <Vector vector="23x 11y" catImg="https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"/>
      </div>
    );
  }
}

export default App;
