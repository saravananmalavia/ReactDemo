import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {
        
   render() { 
             console.log('Counters - rendered!') ;
        return <div>
            <button className= "btn btn-info btm-sm m-2"  onClick={this.props.onReset}> Reset </button>  
           {this.props.counters.map(counter => 
           <Counter 
                    key = {counter.id} 
                    onDelete = {this.props.onDelete}
                    onIncrement = {this.props.onIncrement}
                    onDecrement = {this.props.onDecrement}
                    counter = {counter}
                    >
               <h6>Product {counter.id}</h6>
           </Counter>
           )}

        </div>;
    }
} 
export default Counters;    