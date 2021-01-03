import React, { Component } from 'react';
import styles from './header.module.css';

class Header extends Component {
  inputRef = React.createRef();

  handleSearch = () => {
    const keyword = this.inputRef.current.value;
    console.log('handleClick', keyword);
    this.props.onSearchClick(keyword);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleClick = (e) => {
    this.handleSearch();
  };

  render() {
    return (
      <>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src='images/logo.png' alt='logo' className={styles.logo} />
            <h1 className={styles.title}>YouTube</h1>
          </div>
          <div className='search-container'>
            <input
              ref={this.inputRef}
              type='search'
              className={styles.input}
              placeholder='검색'
              onKeyPress={this.handleKeyPress}
            />
            <button className={styles.button} onClick={this.handleClick}>
              검색
            </button>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
