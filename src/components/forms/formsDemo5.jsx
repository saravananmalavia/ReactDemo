import React, { Component } from 'react';  
class FormsDemo5 extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            personGoing: true,  
            numberOfPersons: 5,
            history: "Trivandrum District"

        };  
        this.handleInputChange = this.handleInputChange.bind(this);  
   }  
   handleInputChange(event) {  
       const target = event.target;  
        const value = target.type === 'checkbox' ? target.checked : target.value;  
      //const value = target.type === 'checkbox' ? false : target.value;  
       const name = target.name;  
       console.log(name);
       this.setState({  
           [name]: value
       });  
  }  
  render() {  
      return (  
          <form>  
              <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name = "personGoing"  
                    type = "checkbox"  
                    value = "not checked"
                    checked = {this.state.personGoing}  
                    onChange = {this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input  
                 name = "numberOfPersons"  
                 type = "number"  
                 value = {this.state.numberOfPersons}  
                 onChange = {this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 History:  
                 <input  
                 name = "history"  
                 type = "text"  
                 value = {this.state.history}  
                 onChange = {this.handleInputChange} />  
             </label>  


             <p>personGoing </p> {this.state.personGoing}
             <p>numberOfPersons </p> {this.state.numberOfPersons}
             <p>history </p> {this.state.history}
         </form>  
     );  
  }  
}  
export default FormsDemo5;  