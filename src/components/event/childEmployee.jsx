import React, { Component } from 'react';
export default class Employee extends React.Component {
    constructor(props) {
       super(props);
       console.log("Person Prop",this.props.empName);
    }
     render() {  
         return (  
             <div>  
                 <h1>State & Props Example</h1>  
                 <h3>Welcome to {this.props.empName}</h3>  
                 <button className = "btn btn-primary btm-sm m-2" onClick = {() => this.props.onChange('Arun') } > change Name</button>
                 </div>    
         );  
      }  
 }