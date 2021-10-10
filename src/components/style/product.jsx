import React, { Component } from 'react';
class product extends React.Component {

    state = {
        count : 0,
        imageUrl : 'https://picsum.photos/200'
    }
    styles = {
        fontSize : '40px',
        fontWeight : 'bold'
    }


    constructor() {
        super();
        //this.doIncrement = this.doIncrement.bind(this);
        this.doDisplay = this.doDisplay.bind(this);
    }


    doIncrement = () =>{
        this.setState({count : this.state.count + 1 });
    
    }
    doDecrement = () =>{
        this.setState({count : this.state.count - 1 });
    
    }


    doDisplay(){    
        console.log(this.state.count)
        console.log('this button is clicked');
    }
    render() { 
        return <div>
            <h3>Product</h3>
            
            <span className = {this.getBadgeClasses()}  >{this.formatCount()}</span> 
                <button className= "btn btn-success btm-sm m-1"  onClick={this.doIncrement}> + </button> 
                <button className= "btn btn-primary btm-sm m-1"  onClick={this.doDecrement    }> - </button> 
        </div>;
    }   

    formatCount(){
        //const { count } = this.state;
        return ( this.state.count === 0 ? 'Zero' :  this.state.count );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default product ;