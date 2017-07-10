import React , { Component } from 'react';

export default class Welcome extends Component {

   render(){
      function findProps(props){
      console.log(props);
   }

      return (
         <div>
               <h1>Welcome Mr. {this.props.name} </h1>
         </div>
      
      );
   }
}