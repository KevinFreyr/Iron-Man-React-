import React, { Component } from 'react';

export default class Voterlinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkList: []
        }
    }
    handleClick(props) {
    }
    render() {
        console.log(this.props.src);
        return (
            <div className="row">
                    <div className=".col-md-4">
                        {this.state.linkList.map(function(value, i) {
                            let curr = this.state.current; 
                            return( 
                                <Link
                                    key = {i}
                                    loc = {i}
                                    id = {value.id}
                                />
                            )
                        }.bind(this))}
                    </div>
                </div>
        )
    }
}
