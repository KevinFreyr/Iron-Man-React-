import React, { Component } from 'react';

import './Option.css';

export default class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "normal",
            points: 0
        }
    }
    handleClick(props) {
        props.update(props.loc, props.points, props.src);
        if(this.state.class !== "normal") {
            this.setState({
                class: "normal",
                points: 0
            })
        } else {
            // gamalt
            // this.setState({
            //     class: "option" + props.points,
            //     points: props.points
            // })
        }
        
    }
    render() {
        return (
            <div className={"option " + this.state.class} onClick={() => this.handleClick(this.props)}>
                <img src={this.props.src} alt="roadhouse" />
            </div>
        )
    }
}
