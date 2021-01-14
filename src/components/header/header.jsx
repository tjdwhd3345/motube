import React, { PureComponent } from 'react';
import styles from './header.module.css';

class Header extends PureComponent {
  inputRef = React.createRef();

  handleSearch = () => {
    const keyword = this.inputRef.current.value;
    console.log('handleClick', keyword);
    this.props.onSearchClick(keyword);
    this.inputRef.current.blur();
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleClick = (e) => {
    this.handleSearch();
  };

  handleLogoClick = () => {
    window.location = '/motube';
  };

  render() {
    console.log('header.jsx render');
    return (
      <>
        <header className={styles.header}>
          <div className={styles.logoContainer} onClick={this.handleLogoClick}>
            <img src='images/logo.png' alt='logo' className={styles.logo} />
            <span className={styles.title}>MoTube</span>
          </div>
          <input
            ref={this.inputRef}
            type='search'
            className={styles.searchInput}
            placeholder='검색'
            onKeyPress={this.handleKeyPress}
          />
          <button className={styles.searchButton} onClick={this.handleClick}>
            <img src='images/search.png' alt='search' />
          </button>
        </header>
      </>
    );
  }
}

export default Header;
