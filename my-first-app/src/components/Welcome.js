import React , { Component } from 'react';

export default class Welcome extends Component {
   constructor(props){
      super(props);
      this.state = {
         name : "Makrov"
      };
    this.handleClick = this.handleClick.bind(this);
   }

    handleClick() {
    this.setState(prevState => ({
      name: "kera"
    }));
  }
   render(){
      
      return (
         <div>
               <h1 onClick={this.handleClick}>Welcome Mr. {this.state.name} </h1>
         </div>
      
      );
   }
}