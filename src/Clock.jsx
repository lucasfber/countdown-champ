import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0
        }
    }
    
    componentWillMount(){
        console.log('Clock.componentWillMount()');
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        console.log('Clock.componentDidMount()');
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({
             days : days,
             hours : hours,
            minutes : minutes,
            seconds : seconds});
    }

    render() {
        console.log('Clock.render()');
        return (
            <div>
                <div className="Clock-days">{this.state.days} days</div>
                <div className="Clock-hours">{this.state.hours} hours</div>
                <div className="Clock-minutes">{this.state.minutes} minutes</div>
                <div className="Clock-seconds">{this.state.seconds} seconds</div>
            </div>
        );
    }
}

export default Clock;