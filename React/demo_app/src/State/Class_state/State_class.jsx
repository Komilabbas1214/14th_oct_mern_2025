/*
Using the state Object
Refer to the state object anywhere in the component by using the 

constructor(){
    super();
    this.state = {
            name: "Rajesh Nagar",
    }
}

print : {this.state.name}


Changing the state Object
To change a value in the state object, use the this.setState() method.

this.setState({color: "blue"})

*/



import React, { Component } from 'react'
import Class_img from './Class_img';

export class State_class extends Component {

    //constructr megic function its call automatic
    constructor() {
        super();
        this.state = {
            name: "Rajesh Nagar",
            number: 1,
            isImage: true
        }
    }

    render() {
        return (
            <div className='container'>
                <button className='btn btn-primary' onClick={()=>this.setState({name:"Akash Nagar"})}>Change</button>
                <h1>Hi my name is {this.state.name}</h1> 
                <hr />

                <button  className='btn btn-primary' onClick={()=>this.setState({number:this.state.number+1})}>+</button>
                <h1>{this.state.number}</h1>    
                <button  className='btn btn-primary' onClick={()=>this.setState({number:this.state.number-1})}>-</button>

                <hr />
                <button  className='btn btn-primary' onClick={()=>this.setState({isImage:false})}>Hide</button>
                <button  className='btn btn-primary' onClick={()=>this.setState({isImage:true})}>Show</button>
                <button  className='btn btn-primary' onClick={()=>this.setState({isImage:!this.state.isImage})}>Hide/Show</button>

                {
                    this.state.isImage ?<Class_img/> : null
                }
                
            
            </div>
        )
    }
}

export default State_class