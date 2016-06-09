import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import './styles/foundation.min.scss';

import ItemList from './components/Items/ItemList'

let rootEl = document.getElementById('root');

ReactDOM.render(<ItemList />, rootEl);
