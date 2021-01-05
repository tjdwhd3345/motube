import React, { Component } from 'react';
import styles from './infobox.module.css';

class Infobox extends Component {
  render() {
    const details = this.props.details;
    console.log(details);
    return (
      <div className={styles.info}>
        {/* <div className={styles.tag}></div> */}
        <div className={styles.title}>{details.title}</div>
        <span className={styles.playCounts}>조회수 10000회</span>
        <span className={styles.publishedDate}>
          {details.publishedAt.slice(0, 10).replaceAll('-', '.')}
        </span>
        <hr />
        <span className={styles.channelTitle}>{details.channelTitle}</span>
        <pre className={styles.description}>{details.description}</pre>
      </div>
    );
  }
}

export default Infobox;
