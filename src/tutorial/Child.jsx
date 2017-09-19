import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <input 
                    onChange={this.props.onChange}
                />
                <button onClick={this.props.onClick}>Muda o nome no Parent</button>
            </div>
        );
    }
}

export default Child;