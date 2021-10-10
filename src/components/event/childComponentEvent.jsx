import React, { Component } from 'react';
class ChildComponentEvent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
           data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
     };
     updateState(e) {
        this.setState({data: e.target.value});
     }
     render() {
        return (
           <div>
              <Content myDataProp = {this.state.data} 
                 updateStateProp = {this.updateState}></Content>
           </div>
        );
     }
  }



export default ChildComponentEvent;