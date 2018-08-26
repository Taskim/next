import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FE5B5F',
};

const hiddenStyle = {
    color: '#FE5B5F',
    fontSize: 10,
    border: 0,
    background: '#FE5B5F',
    position: 'absolute',
    left: '75%',
    top: '95%',
    cursor: 'pointer',
};

const messageStyle = {
    color: 'white',
    fontSize: 24,
};

const countStyle = {
    fontSize: 128,
    color: 'white',
    margin: '48px 0',
};

const buttonStyle = {
    // position: 'absolute',
    color: 'white',
    border: '5px solid white',
    borderRadius: 0,
    backgroundColor: 'transparent',
    fontSize: 36,
    padding: '24px 48px',
    margin: 24,
    outline: 'none',
    cursor: 'pointer',
};

const legendStyle = {
    color: 'white',
    fontSize: 12,
};

class One extends Component {
    constructor() {
        super();
        this.state = {
            displayButton: false,
            count: 0,
        };
        this.display = this.display.bind(this);
        this.increment = this.increment.bind(this);
    }

    display() {
        this.setState({ displayButton: true });
    }

    increment() {
        this.setState(() => ({ count: this.state.count + 1 }));
    }

    render() {
        // console.log('kikoo:', process.env.PUBLIC_URL);
        return (
            <div style={containerStyle}>
                <div style={messageStyle}>Sortir par ici, tu devras...</div>
                <button onClick={this.display} style={hiddenStyle}>
                    ici
                </button>
                <div style={countStyle}>{this.state.count}</div>
                <button onClick={this.increment} style={buttonStyle}>
                    Là
                </button>
                {this.state.displayButton && (
                    <Link to={'/deux'}>
                        <button style={buttonStyle}>next</button>
                    </Link>
                )}
                {this.state.displayButton &&
                    this.state.count > 1 && (
                        <div style={legendStyle}>
                            {`Après ${this.state.count} clics de teubé...`}{' '}
                        </div>
                    )}
            </div>
        );
    }
}

export default One;
