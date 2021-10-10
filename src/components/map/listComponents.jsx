import React, { Component } from 'react';
class listComponent extends React.Component {
    state ={
        //tags: ["Java", "SpringBoot", "ReactJS"]
            tags:[]
    };
    render() { 
        return (
            <div>
                {this.state.tags.length === 0 && "Please add a new subject!" }
                <ul>
                    {this.rederSubjects()}
                </ul>
            </div>
        );
    }

    rederSubjects(){
        if(this.state.tags.length === 0 ) return <p>There are no Subjects in the List</p>

        return (<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>);
    }
}   
 
export default listComponent;