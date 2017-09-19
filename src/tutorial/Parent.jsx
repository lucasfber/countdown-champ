import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'Lucas Bertoldo'
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(){
        console.log('STATE', this.state);
    }

    handleChange(event){
        this.setState({name : event.target.value});
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <Child name={this.state.name} onClick={this.handleClick} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Parent;