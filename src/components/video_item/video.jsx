import React, { Component } from 'react';
import styles from './video.module.css';

class Video extends Component {
  videoId = this.props.video.id;
  snippet = this.props.video.snippet;

  handleOnClick = () => {
    this.props.onVideoClick(this.videoId);
  };
  render() {
    return (
      <li className={styles.container} onClick={this.handleOnClick}>
        <div className={styles.video}>
          <img
            src={this.snippet.thumbnails.medium.url}
            alt='video thumbnail'
            className={styles.thumbnail}
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{this.snippet.title}</p>
            <p className={styles.channel}>{this.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Video;
