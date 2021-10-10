import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';
 //import App from "./App"

//import FormsDemo5 from "./components/forms/formsDemo5";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 

 import App from './components/router/app';  
 import About from './components/router/about'  
 import Contact from './components/router/contact'  
//import Person from './components/event/parentComponent'
//import Contact from ''App from "./App";
/*
const routing = (  
    <Router>  
      <div>  
        <h1>React Router Example</h1>  
        <Route path="/" component={App} />  
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} />  
      </div>  
    </Router>  
  )  */

  const routing = (  
    <Router>  
      <div>  
        <h1>React Router Example</h1>  
        <ul>  
          <li>  
            <Link to="/">Home</Link>  
          </li>  
          <li>  
            <Link to="/about">About</Link>  
          </li>  
          <li>  
            <Link to="/contact">Contact</Link>  
          </li>  
        </ul>  
        <Route exact path="/" component={App} />  
        <Route path="/about" component={About} />  
        <Route path="/contact" component={Contact} />  
      </div>  
    </Router>  
  )  

ReactDOM.render(routing, document.getElementById('root'));

