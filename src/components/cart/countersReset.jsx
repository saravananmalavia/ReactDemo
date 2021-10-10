import React, { Component } from 'react';
import CounterReset from './counterReset';
class CountersReset extends React.Component {
        state = {
            counters: [
                {id:1, value:4},
                {id:2, value:1},
                {id:3, value:2},
                {id:4, value:0},
            ]
        }
        handlReset = () => {
            //console.log('Event Handler called', counterId) ;
            const counters = this.state.counters.map(c => {c.value = 0; return c;});
            this.setState({ counters: counters});
        }
        handleDelete = counterId => {
            //console.log('Event Handler called', counterId) ;
            const counters = this.state.counters.filter(c => c.id != counterId);
            this.setState({ counters: counters});
        }
   render() { 
        return <div>
            <button className= "btn btn-info btm-sm m-2"  onClick={this.handlReset}> Reset </button>  
           {this.state.counters.map(counter => 
           <CounterReset 
                    key = {counter.id} 
                    onDelete = {this.handleDelete}
                    counter = {counter}
                    >
               <h6>Product {counter.id}</h6>
           </CounterReset>
           )}

        </div>;
    }
} 
export default Counters;    