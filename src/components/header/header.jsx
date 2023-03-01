import React, { useState } from "react";
import styles from "./header.module.css";

function Header({ onSearchClick }) {
  const [keyword, setKeyowrd] = useState("");

  const handleLogoClick = () => {
    window.location = "/motube";
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onSearchClick(keyword);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick={handleLogoClick}>
        <img src="images/logo.png" alt="logo" className={styles.logo} />
        <span className={styles.title}>MoTube</span>
      </div>
      <input
        value={keyword}
        type="search"
        className={styles.searchInput}
        placeholder="검색"
        onChange={(e) => {
          const { value } = e.target;
          setKeyowrd(value);
        }}
        onKeyUp={handleKeyUp}
      />
      <button className={styles.searchButton} onClick={() => onSearchClick(keyword)}>
        <img src="images/search.png" alt="search" />
      </button>
    </header>
  );
}

export default Header;
