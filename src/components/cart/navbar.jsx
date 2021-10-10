import React, { Component } from 'react';

    // stateless functional components 
    const NavBar = (props) => {
        console.log('NavBar - rendered!') ;
        return ( 
          
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My Cart {" "} <span className="badge m-2 badge-dark">{props.totalCounters}</span></a>
            </div>
        </nav> );
    }
     
    export default  NavBar;

/*class NavBar extends React.Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Cart <span className="badge m-2 badge-dark">{this.props.totalCounters}</span></a>
                </div>
            </nav>
        );
    }
}*/
 
