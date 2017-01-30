import React, { Component } from 'react';
import './questions.css';
import Option from './Option';
import Selection from './Selection';
import road from '../images/roadhouse.jpg';
import saff from '../images/saffran.jpg';
import pita from '../images/pitan.jpg';
import domi from '../images/dominos.png';
import elds from '../images/eldsm.jpg';
import none from '../images/eldsm.jpg';
// import none from './images/matur.png'; // TODO: Mynd fyrir "alveg sama" möguleikann


class Questions extends Component {
    constructor() {
        super();
        this.state = {
            options: [
                road, saff,
                pita, domi,
                elds, none 
            ],
            selected: [],
            points: [
                3, 2, 1
            ],
            current: 0,
        }
    }

    update(loc, points, src) {
        console.log("pushed with loc: " + loc);
        console.log("and points: " + points);
        console.log("and src: " + src);
        let temp = this.state.options;
        temp.splice(loc, 1);
        this.setState({
            options: temp
        })
        this.setState({
            selected: this.state.selected.concat({
                src: src,
                loc: loc,
                points: points,

            })
        })
        
    }

    remove(loc, oldLoc, src) {
        let temp = this.state.selected;
        temp.splice(loc, 1);
        let tempOptions = this.state.options;
        console.log("src being added again: " + src);
        tempOptions.splice(oldLoc, 0, src); // Add back into option list

        this.setState({
            selected: temp,
            options: tempOptions
        })
        console.log(this.state.options);

        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className=".col-md-4">
                        {this.state.options.map(function(value, i) {
                            let curr = this.state.current;
                            return( 
                                <Option
                                    key     = {i}
                                    loc     = {i}
                                    src     = {value}
                                    update  = {this.update.bind(this)}
                                    points  = {this.state.points[curr]} 
                                    show    = {true}
                                    />
                            )
                        }.bind(this))}
                    </div>
                </div>
                    <div className="row">
                        <div className=".col-md-4">
                            {this.state.selected.map(function(value, i) {
                                let curr = this.state.current; 
                                return( 
                                    <Selection
                                        key     = {i}
                                        loc     = {i}
                                        oldLoc  = {value.loc}
                                        src     = {value.src}
                                        remove  = {this.remove.bind(this)} />
                                )
                            }.bind(this))}
                        </div>
                    </div>
                <div className="row"> 
                    <button>Senda</button> <button>Hreinsa</button> <button>test</button>
                </div>
            </div>
        );
    }
}

export default Questions;

            