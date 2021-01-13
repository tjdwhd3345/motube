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
            <div>
              <p className={styles.title}>{snippet.title}</p>
              <p className={styles.channel}>{snippet.channelTitle}</p>
              <p className={styles.channelInfo}>
                조회수 {this.numberWithCommas(statistics.viewCount)} 회 •{' '}
                {snippet.publishedAt.slice(0, 10).replaceAll('-', '.')}
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Video;
