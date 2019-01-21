import React, { Component } from 'react';
import './Header.css';
import logo from './2071-logo.jpg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header__logo"/>
          <ul className="header__navigation">
            <li>About</li>
            <li>Products & Offering</li>
            <li>Space & Design</li>
            <li>Challenge</li>
            <li>Join Us</li>
          </ul>
      </header>
    );
  }
}

export default Header;