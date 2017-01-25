import React, { Component } from 'react';

import './Selection.css';

export default class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "normal"
        }
    }
    handleClick(props) {
        props.remove(props.loc, props.oldLoc, props.src);
    }
    render() {
        console.log(this.props.src);
        return (
            <div className="option">
                <img src={this.props.src} alt={"option " + this.props.loc} onClick={() => this.handleClick(this.props)} />
            </div> 
        )
    }
}
