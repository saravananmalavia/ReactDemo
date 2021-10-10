import React, { Component } from 'react';
import Employee from './childEmployee';

class Person extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {  
           name: "Saravanan",         
        }  
     } 
handleChange = (newName) => {

   console.log("I am clicked from child component");

  // this.setState({ name: 'Ahana' })
   this.setState({ name: newName })

 } 
     render() {  
        return (  
           <div>  
              <Employee 
                  empName = {this.state.name}
                  onChange = {this.handleChange}
              />             
           </div>  
        );  
     }  
}




//onClick = {() => this.props.onChange('saravanan')  } 
//onClick = {this.props.onChange }      

export default Person;