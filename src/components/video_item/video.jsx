import React, { Component } from 'react';
import styles from './video.module.css';

class Video extends Component {
  handleOnClick = () => {
    this.props.onVideoClick(this.props.video);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    console.log('video.jsx render');
    const {
      videoId: id,
      snippet,
      channelThumbnail,
      statistics,
    } = this.props.video;
    const displayType =
      this.props.display === 'list' ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={this.handleOnClick}
      >
        <div className={styles.video}>
          <img
            src={snippet.thumbnails.maxres.url}
            alt='video thumbnail'
            className={styles.thumbnail}
          />
          <div className={styles.metadata}>
            <img
              className={styles.channelThumbnail}
              src={`${channelThumbnail.url}`}
              alt='channelThumbnail'
            />
            <div className={styles.titlebox}>
              <span className={styles.title}>{snippet.title}</span>
              <span className={styles.channel}>{snippet.channelTitle}</span>
              <span className={styles.channelInfo}>
                조회수 {this.numberWithCommas(statistics.viewCount)} 회 •{' '}
                {snippet.publishedAt.slice(0, 10).replaceAll('-', '.')}
              </span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Video;
