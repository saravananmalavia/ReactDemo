import React, { Component } from 'react';
class ForceUpdateDemo extends React.Component {
    constructor() {  
        super();            
        this.forceUpdateState = this.forceUpdateState.bind(this);  
     }  
     forceUpdateState() {  
        this.forceUpdate();  
     };  
     render() {  
        return (  
           <div>  
               <h1>Example to generate random number</h1>  
               <h3>Random number: {Math.random()}</h3>  
               <button onClick = {this.forceUpdateState}>ForceUpdate</button>  
           </div>  
        );  
     }  
}
 
export default ForceUpdateDemo;