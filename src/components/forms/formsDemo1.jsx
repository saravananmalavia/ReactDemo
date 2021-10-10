import React, { Component } from 'react';
class FormDemo1 extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
           data1: 'I am data 1 ...',
           data2: 'I am data 2 ...'
        }
        //this.updateState = this.updateState.bind(this);
     };

     updateState1 = (e) => {
        this.setState({data1: e.target.value});
     }
     updateState2 = (e) => {
      this.setState({data2: e.target.value});
   }

    render() { 
        return (
            <div>
               <input type = "text" value = {this.state.data1} 
                  onChange = {this.updateState1} />
               <input type = "text" value = {this.state.data2} 
                  onChange = {this.updateState2} />
               <h4>{this.state.data1}</h4>
               <h4>{this.state.data2}</h4>
            </div>
         );
    }
}
 
export default FormDemo1;