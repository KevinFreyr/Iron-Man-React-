import React, { Component } from 'react';
import './questions.css';
class Questions extends Component {
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
            </div>
            </div>
        );
    }
}

export default Questions;