import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import One from './One';
import Deux from './Deux';

const App = ({ base }) =>
    console.log('base', base, process.env.PUBLIC_URL) || (
        // <One />
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Switch>
                    <Route exact path={'/'} component={One} />
                    <Route exact path={'/deux'} component={Deux} />
                    <Route path="*" component={() => <div>404</div>} />
                </Switch>
            </div>
        </Router>
    );
export default App;
