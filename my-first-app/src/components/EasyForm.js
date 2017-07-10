import React , { Component } from 'react';
export default class EasyForm extends Component{

   constructor(props){
      super(props);
      this.state = {value : 'please write'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
   }

   handleChange(event) {
      this.setState({value:event.target.value});
   }

   handleSubmit(event){
      alert('A name was submitted ' + this.state.value);
      event.preventDefault();
   }

   render(){
      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               name:
               <textarea type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
         </form>
      );
   }
}