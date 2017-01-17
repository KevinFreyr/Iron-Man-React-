import React, { Component } from 'react';
import './questions.css';
class Questions extends Component {

    constructor() {
        super();
        this.state = {
            results: 0
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({
            results: ++this.state.results
        })
    };

    render() {
        return (
            <div className="Questions-container">
            <div className="Questions-options">Question 1</div>
            <div className="Questions-options">Answer 2</div>
            <div className="Questions-options">Answer 3</div>
            <div className="Questions-options">Answer 4</div>
            <div className="Questions-options">Answer 5</div>
            <div className="Questions-options">Answer 6</div>
            <div className="Questions-button-container"> 
                <button>Senda</button> <button>Hreinsa</button> <button onClick={this.increment}>test</button>
            </div>
            <div> result: {this.state.results} </div>
            </div>
        );
    }
}

export default Questions;