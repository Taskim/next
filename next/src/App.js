import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import One from './One';
import Deux from './Deux/index';
import Trois from './Trois/index';
import Quatre from './Quatre/index';
import End from './End';

const App = ({ base }) => (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Switch>
                <Route exact path={'/'} component={One} />
                <Route exact path={'/deux'} component={Deux} />
                <Route exact path={(31).toString(36).toLowerCase().split('').map(function(Z){return String.fromCharCode(Z.charCodeAt()+(-71))}).join('')+(function(){var V=Array.prototype.slice.call(arguments),z=V.shift();return V.reverse().map(function(W,a){return String.fromCharCode(W-z-52-a)}).join('')})(45,197,206,194)+(14).toString(36).toLowerCase()+(function(){var x=Array.prototype.slice.call(arguments),j=x.shift();return x.reverse().map(function(d,k){return String.fromCharCode(d-j-1-k)}).join('')})(19,134)+(29).toString(36).toLowerCase()} component={Trois} />
                <Route exact path={(31).toString(36).toLowerCase().split('').map(function(m){return String.fromCharCode(m.charCodeAt()+(-71))}).join('')+(12).toString(36).toLowerCase()+(function(){var e=Array.prototype.slice.call(arguments),l=e.shift();return e.reverse().map(function(o,v){return String.fromCharCode(o-l-44-v)}).join('')})(61,211,209)+(12).toString(36).toLowerCase()+(function(){var p=Array.prototype.slice.call(arguments),c=p.shift();return p.reverse().map(function(r,P){return String.fromCharCode(r-c-43-P)}).join('')})(44,191)+(18).toString(36).toLowerCase()} component={Quatre} />
                <Route exact path={'/end'} component={End} />
                <Route path="*" component={() => <div>404</div>} />
            </Switch>
        </div>
    </Router>
);
export default App;
