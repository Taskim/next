import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Quatre extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            display: false,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.persist();
        const value = e.target.value;
        this.setState(() => ({ value }));
        if (
            value.toLowerCase() ===
            (10).toString(36).toLowerCase() +
                (function() {
                    var g = Array.prototype.slice.call(arguments),
                        N = g.shift();
                    return g
                        .reverse()
                        .map(function(E, U) {
                            return String.fromCharCode(E - N - 22 - U);
                        })
                        .join('');
                })(29, 150) +
                (16069).toString(36).toLowerCase() +
                (function() {
                    var z = Array.prototype.slice.call(arguments),
                        B = z.shift();
                    return z
                        .reverse()
                        .map(function(t, F) {
                            return String.fromCharCode(t - B - 19 - F);
                        })
                        .join('');
                })(11, 131)
        ) {
            this.setState(() => ({ display: true }));
        } else if (this.state.display === true) {
            this.setState(() => ({ display: false }));
        }
    }

    render() {
        return (
            <div
                className="qtr-container"
                style={{ backgroundColor: `#${this.state.value}` }}
            >
                <p className="qtr-code">
                    001110110001001100111001
                    <br />
                    <span
                        className="qtr-dd"
                        style={{ color: `#${this.state.value}` }}
                    >
                        {(function() {
                            var O = Array.prototype.slice.call(arguments),
                                s = O.shift();
                            return O.reverse()
                                .map(function(q, L) {
                                    return String.fromCharCode(q - s - 46 - L);
                                })
                                .join('');
                        })(25, 114)}
                    </span>
                    011100111011101110100101
                </p>
                <div className="qtr-flexContainer">
                    <span>#</span>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder="------"
                        className="qtr-answer"
                    />
                </div>
                {this.state.display && (
                    <div className="qtr-resContainer">
                        <Link to="/end">
                            <button className="qtr-button">NEXT ~></button>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default Quatre;
//
