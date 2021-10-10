import React, {Component} from 'react';
class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {  
        console.log("prevProps", prevProps)  
        console.log("prevState", prevState) 
        console.log("prevState", prevState) 
        console.log("prevState", prevState) 
        // if(prevState.counter.value !== this.props.counter.value){
        //     // make ajax call for new updates
        // }
     } 
 
     componentWillUnmount() {  
        console.log('Counter - Component Will UNMOUNT!')  
     } 
   
    render(){
        console.log('Counter - rendered!') ;
            const {onIncrement, onDecrement, onDelete, counter  } = this.props;
            //console.log('props', this.props);
        return (
            <div>
                {this.props.children}
                <span  className = {this.getBadgeClasses()} >{this.formatCount()}</span>
                <button className= "btn btn-success btm-sm m-2" onClick={() => onIncrement(counter) }> Increase </button> 
                <button className= "btn btn-primary btm-sm m-2" onClick={() => onDecrement(counter)} > Decrease </button>
                <button className= "btn btn-danger btm-sm m-2" onClick={() => onDelete(counter.id) }> Remove </button>  
            </div>
      );  
    }    

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const { value } = this.props.counter;
        return (value === 0 ? 'Zero' : value );
    }
   

     
}
export default Counter;