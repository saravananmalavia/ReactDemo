import React, { Component } from 'react';
class PropsDemo extends React.Component {
    render() {     
        return (  
            <div>  
              <h1> Name { this.props.name } </h1> 
              <h2> Age{ this.props.age } </h2>     
              <p> <h4> Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. </h4> </p>          
            </div>  
        );  
     }  

}

PropsDemo.defaultProps = {  
    name: "JavaTpoint",  
    age: "23"
 }  
 
 
export default PropsDemo;