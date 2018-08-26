import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
    width: '100vw',
    height: '100vh',
};

const hiddenStyle = {
    color: 'white',
    fontSize: 2,
    border: 0,
    background: 'white',
    position: 'absolute',
    left: '75%',
    top: '95%',
}

const buttonStyle = {
    position: 'absolute',
};

class Deux extends Component {
    constructor() {
        super();
        this.state = {
            displayButton: false,
        };
        this.display = this.display.bind(this);
    }

    display() {
        this.setState({ displayButton: true });
    }

    render() {
        return (
            <h1>Bien ouej mamène</h1>
        );
    }
}

export default Deux;
