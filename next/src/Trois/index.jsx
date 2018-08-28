import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import img from './chichi.jpg';

class Trois extends Component {
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
        if (value === (function(){var d=Array.prototype.slice.call(arguments),T=d.shift();return d.reverse().map(function(t,a){return String.fromCharCode(t-T-11-a)}).join('')})(11,92,99,88,96)+(24).toString(36).toLowerCase().split('').map(function(t){return String.fromCharCode(t.charCodeAt()+(-39))}).join('')+(function(){var N=Array.prototype.slice.call(arguments),o=N.shift();return N.reverse().map(function(A,d){return String.fromCharCode(A-o-14-d)}).join('')})(50,147,137)+(17).toString(36).toLowerCase().split('').map(function(m){return String.fromCharCode(m.charCodeAt()+(-39))}).join('')+(function(){var t=Array.prototype.slice.call(arguments),H=t.shift();return t.reverse().map(function(F,z){return String.fromCharCode(F-H-21-z)}).join('')})(24,120)) {
            this.setState(() => ({ display: true }));
        } else if (this.state.display === true) {
            this.setState(() => ({ display: false }));
        }
    }

    render() {
        return (
            <div className="trs-container">
                <p className="trs-code">
                    QPVS QBTTFS B M'FUBQF TVJWBOUF, JM GBVU SFOUSFS MF DPEF
                    KBLDIJSBL
                </p>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Veuillez entrer le code"
                    className="trs-input"
                />
                {this.state.display && (
                    <div className="trs-resContainer">
                        <Link to="/chichi">
                            <button className="trs-button">NEXT ~></button>
                        </Link>
                        <img src={img} width={300} />
                    </div>
                )}
            </div>
        );
    }
}

export default Trois;
