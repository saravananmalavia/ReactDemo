import React, { Component } from 'react';
import NavBar from './components/cart/navbar';
import Counters from './components/cart/counters';

class App extends React.Component {

    constructor(){
        super()
        console.log('App - Constructor') ;
    }

    state = {
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0},
            {id:6, value:0},
        ],
        resets: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0 },
            {id:4, value:0},
            {id:5, value:0},
            {id:6, value:0},
        ]

    }

    componentDidMount() {  
        // Ajax calls -- to get the data from the server
        // this.seState({new Data})
        console.log('App - Component Did MOUNT!')  
     } 

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value ++;
        this.setState({counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        if(counters[index].value >=1){
            counters[index].value --;
        }
        
        this.setState({counters});
    }


    handlReset = () => {
       
       // const counters = this.state.counters.map(c => {c.value = 0; return c;});
        const counters = [...this.state.resets];
        this.setState({ counters: counters});
    }
    handleDelete = counterId => {
        //console.log('Event Handler called', counterId) ;
        const counters = this.state.counters.filter(c => c.id != counterId);
        this.setState({ counters: counters});
    }
    render() { 
        console.log('App - rendered!')  
        return (
        <React.Fragment>
            <NavBar totalCounters = {this.state.counters.filter(c => c.value >0).length}/>
            <main className="container">
                <Counters 
                    counters = {this.state.counters}
                    onReset = {this.handlReset}
                    onDecrement = {this.handleDecrement}
                    onIncrement = {this.handleIncrement}
                    onDelete = {this.handleDelete}
                />
            </main>
        </React.Fragment>
        );
    }
}
 
export default App; 