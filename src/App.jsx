import React, { Component } from 'react';
import Clock from './Clock';
import {Form, Button, FormControl} from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.changeDeadline = this.changeDeadline.bind(this);
        this.changeDeadlineInput = this.changeDeadlineInput.bind(this);
            
        this.state = {
            deadline : 'December 25, 2017',
            newDeadline : null
        };
    }

    changeDeadline(){
        this.setState({
            deadline : this.state.newDeadline,
        });
    }

    changeDeadlineInput(event){
        this.setState({
            newDeadline : event.target.value
        });
    }

    render() {
        console.log('App.Render()');
        return (
            <div className="App">
                <div className="App-title">
                    {this.state.deadline}
                </div>    
                <Clock deadline={this.state.deadline} />
                <Form inline>
                    <FormControl className="Deadline-input"
                        type="text" 
                        placeholder="Ex: December 25, 2017" 
                        onChange={this.changeDeadlineInput}
                        ref="deadlineInput" 
                    />
                    <Button onClick={this.changeDeadline}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default App;     