import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

//STYLES
import './styles/scss/bootstrap.scss';
import './styles/normalize.scss';

import App from './components/App';



//GET THIS PARTY STARTED
ReactDOM.render( <App />, document.getElementById('root'));
