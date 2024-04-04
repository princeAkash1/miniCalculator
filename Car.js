import React from "react";

export class Car extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            color :props.color
        }
    }
    render(){
        return(
            <div>

                <h1>The color of car is {this.state.color}</h1>
                <h1>the number of car is {this.props.number}</h1>
            </div>
        );
    }
}

