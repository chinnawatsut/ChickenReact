import React , { Component } from 'react';

export default class Welcome extends Component {
   constructor(props){
      super(props);
      this.state = {
         name : "Makrov"
      };
    this.handleClick = this.handleClick.bind(this);
   }

    handleClick = () => {
      console.log("handle Click");          
      console.log(this);
            this.setState(prevState => ({
                  name: "kera"
            }));
      }

      passingClick = () => {
            console.log("Passing Click");            
            console.log(this);
      }

      listAndKeys = () => {
            const number = [1,2,3,4,5];
            const listItems = number.map((number) => <li key={number}>{number}</li>);
            return listItems;
      }

   render(){
      
      return (
         <div>
               <h1 onClick={this.handleClick}>Welcome Mr. {this.state.name} </h1>
               <button onClick={e => this.passingClick(e)}>Click Me</button>
               {this.state.name === "kera" && 
                  <h2>Name Changed</h2>
               }
               Name Are Changed?{ this.state.name === "Makrov" ? 'No' : 'Yes'}
               {this.listAndKeys()}
         </div>
      );
   }
}