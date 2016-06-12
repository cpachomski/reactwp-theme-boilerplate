import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from './pages/Home';
import AllPosts from './pages/AllPosts';
import About from './pages/About';




const Header = React.createClass({
  displayName: 'Header',

  render() {
    return (
      <nav>
        <a className='navbar-logo' href='/'>
          <i className="fa fa-camera-retro" aria-hidden="true"></i>
        </a>
        <h1>ReactWP</h1>
          <Nav />
      </nav>
    )
  }
});


const Nav = React.createClass({
  displayName: 'Nav',

  getInitialState() {
    return {
      navItems: ['/home','/blog', '/about']
    }
  },
  render() {
    return (
      <ul className="menu">
        {this.state.navItems.map((item) => {
          return (
            <li key={item}>
              <Link to={item}>{item}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
})


const App = ({content}) => (
  <div>
    <Header />
    <div className="site-content">
      {content || (<Home/>) }
    </div>
  </div>
);




render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='home' components={{content: Home}}/>
      <Route path='blog' components={{content: AllPosts}}/>
      <Route path='About' components={{content: About}}/>
    </Route>
  </Router>
), document.getElementById('root'));