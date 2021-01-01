import React, { Component } from 'react';
import Searchbox from './searchbox';

class Header extends Component {
  render() {
    return (
      <>
        <div className='header'>
          <div className='logo-box'>
            <img src='images/logo.png' alt='' className='logo-img' />
            <span className='logo-label'>YouTube</span>
          </div>
          <Searchbox />
        </div>
      </>
    );
  }
}

export default Header;
