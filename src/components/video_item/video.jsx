import React, { Component } from 'react';
import styles from './video.module.css';

class Video extends Component {
  handleOnClick = () => {
    this.props.onVideoClick(this.props.video);
  };
  render() {
    console.log('video.jsx render');
    const { videoId: id, snippet } = this.props.video;
    const displayType =
      this.props.display === 'list' ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={this.handleOnClick}
      >
        <div className={styles.video}>
          <img
            src={snippet.thumbnails.medium.url}
            alt='video thumbnail'
            className={styles.thumbnail}
          />
          <div className={styles.metadata}>
            <p className={styles.title}>
              {snippet.title.length > 40
                ? snippet.title.substr(0, 40) + '...'
                : snippet.title}
            </p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Video;
