import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App base={process.env.PUBLIC_URL || ''} />, document.getElementById('root'));
// registerServiceWorker();
