import React from 'react';
import { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import SkillList from './SkillList';

class Load extends Component {
    state = {

        counter: 50
    }

    componentDidMount = () => {
        const intervalId = setInterval(this.countdown, 100)
        this.setState({ intervalId })
    }

    countdown = () => this.setState({ counter: this.state.counter + 5 })

    componentWillMount = () => clearInterval(this.state.intervalId);
    render() {
        if (this.state.counter < 100) {
            return (
                <CircularProgressbar percentage={this.state.counter} text={`${this.state.counter}%`}></CircularProgressbar>
            );
        }
        return (
                <SkillList></SkillList>


        )
    }
}


export default Load;
