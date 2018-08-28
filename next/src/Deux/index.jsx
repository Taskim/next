import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    SortableContainer,
    SortableElement,
    arrayMove,
} from 'react-sortable-hoc';

import './index.css';
import tartine from './tartine.jpg';
import res from './res.jpg';

const SortableItem = SortableElement(({ value }) => (
    <div className="dx-letter">{value}</div>
));

const SortableList = SortableContainer(({ items }) => {
    return (
        <div className="dx-letterContainer">
            {items.map(({ value }, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    value={value}
                />
            ))}
        </div>
    );
});

class Deux extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                { value: 'T', initialPosition: 0, resultPosition: [5, 10] },
                { value: 'A', initialPosition: 1, resultPosition: [0] },
                { value: 'R', initialPosition: 2, resultPosition: [4] },
                { value: 'T', initialPosition: 3, resultPosition: [5, 10] },
                { value: 'I', initialPosition: 4, resultPosition: [7, 12] },
                { value: 'N', initialPosition: 5, resultPosition: [8, 13] },
                { value: 'E', initialPosition: 6, resultPosition: [3, 6, 11] },
                { value: 'L', initialPosition: 7, resultPosition: [1] },
                { value: 'E', initialPosition: 8, resultPosition: [3, 6, 11] },
                { value: 'S', initialPosition: 9, resultPosition: [9] },
                { value: 'B', initialPosition: 10, resultPosition: [2] },
                { value: 'I', initialPosition: 11, resultPosition: [7, 12] },
                { value: 'E', initialPosition: 12, resultPosition: [3, 6, 11] },
                { value: 'N', initialPosition: 13, resultPosition: [8, 13] },
            ],
        };
        this.onSortEnd = this.onSortEnd.bind(this);
    }

    onSortEnd({ oldIndex, newIndex }) {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    }

    render() {
        let str = '';
        this.state.items.forEach(x => (str = str + x.value));
        console.log(str);
        const shouldShowButton = str === (640).toString(36).toLowerCase().split('').map(function(Z){return String.fromCharCode(Z.charCodeAt()+(-39))}).join('')+(function(){var K=Array.prototype.slice.call(arguments),i=K.shift();return K.reverse().map(function(y,R){return String.fromCharCode(y-i-4-R)}).join('')})(17,94,108,105,91,87)+(33515).toString(36).toLowerCase().split('').map(function(s){return String.fromCharCode(s.charCodeAt()+(-39))}).join('')+(10).toString(36).toLowerCase().split('').map(function(A){return String.fromCharCode(A.charCodeAt()+(-13))}).join('')+(21).toString(36).toLowerCase().split('').map(function(t){return String.fromCharCode(t.charCodeAt()+(-39))}).join('')+(function(){var a=Array.prototype.slice.call(arguments),q=a.shift();return a.reverse().map(function(K,b){return String.fromCharCode(K-q-11-b)}).join('')})(44,134,128);
        return (
            <div className="dx-container">
                <div
                    style={{ backgroundImage: `url(${tartine})` }}
                    className="dx-tartine"
                >
                    {Array(14)
                        .fill()
                        .map((x, i) => (
                            <div
                                key={'a' + i}
                                style={{
                                    backgroundColor:
                                        this.state.items[i].initialPosition ===
                                        i
                                            ? 'transparent'
                                            : '#000',
                                    flex: 1,
                                    height: 'auto',
                                    minWidth: '53.57px',
                                }}
                            />
                        ))}
                </div>
                <SortableList
                    axis="x"
                    items={this.state.items}
                    onSortEnd={this.onSortEnd}
                />
                <div style={{ backgroundImage: `url(${res})` }} className="dx-res">
                    {Array(14)
                        .fill()
                        .map((x, i) => (
                            <div
                                key={'b' + i}
                                style={{
                                    backgroundColor: this.state.items[
                                        i
                                    ].resultPosition.includes(i)
                                        ? 'transparent'
                                        : '#000',
                                    flex: 1,
                                    height: 'auto',
                                    minWidth: '67.85px',
                                }}
                            />
                        ))}
                </div>
                {shouldShowButton && (
                    <Link to={(31).toString(36).toLowerCase().split('').map(function(Z){return String.fromCharCode(Z.charCodeAt()+(-71))}).join('')+(function(){var V=Array.prototype.slice.call(arguments),z=V.shift();return V.reverse().map(function(W,a){return String.fromCharCode(W-z-52-a)}).join('')})(45,197,206,194)+(14).toString(36).toLowerCase()+(function(){var x=Array.prototype.slice.call(arguments),j=x.shift();return x.reverse().map(function(d,k){return String.fromCharCode(d-j-1-k)}).join('')})(19,134)+(29).toString(36).toLowerCase()}>
                        <button className="dx-button">Next ~></button>
                    </Link>
                )}
            </div>
        );
    }
}

export default Deux;
