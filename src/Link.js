import React, { Component } from 'react';

export default class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleClick(props) {
    }
    render() {
        console.log("current id: " + this.props.id);
        let url = "http://localhost:3000/#/vote/id=" + this.props.id;
        return (
            <div className=".col-md-1">
                <a href={url}>{url}</a>
            </div> 
        )
    }
}
