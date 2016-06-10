import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import './styles/scss/bootstrap.scss';
import './styles/normalize.scss';

import AllPosts from './components/pages/AllPosts';


let rootEl = document.getElementById('root');

ReactDOM.render(<AllPosts />, rootEl);
