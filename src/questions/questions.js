import React, { Component } from 'react';
import './questions.css';
class Questions extends Component {

    render() {
        var results = 0;
        var handleClick = function() {
            results = results + 1;
        }
        return (
            <div className="Questions-container">
            <div className="Questions-options">Question 1</div>
            <div className="Questions-options">Answer 2</div>
            <div className="Questions-options">Answer 3</div>
            <div className="Questions-options">Answer 4</div>
            <div className="Questions-options">Answer 5</div>
            <div className="Questions-options">Answer 6</div>
            <div className="Questions-button-container"> 
                <button>Senda</button> <button>Hreinsa</button> <button onClick={handleClick}>test</button>
            </div>
            <div> result: {results} </div>
            </div>
        );
    }
}

export default Questions;