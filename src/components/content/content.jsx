import React, { Component } from 'react';
import styles from './content.module.css';

class Content extends Component {
  state = {
    expand: '',
  };
  toggleExpand = (e) => {
    e.target.innerText = e.target.innerText === '더보기' ? '간략히' : '더보기';
    const expand = this.state.expand === '' ? styles.expand : '';
    this.setState({ expand });
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    const src = `https://www.youtube.com/embed/${this.props.selectedVideo.id}?autoplay=1`;
    const snippet = this.props.selectedVideo.snippet;
    const statistics = this.props.selectedVideo.statistics;
    const expand = this.state.expand;

    console.log('content.jsx render', snippet, statistics);
    return (
      <>
        <section className={styles.detail}>
          <iframe
            id='ytplayer'
            src={src}
            title='motube video player'
            frameBorder='0'
            allowFullScreen
            className={styles.video}
          ></iframe>
        </section>
        <h2 className={styles.title}>{snippet.title}</h2>
        <div className={styles.firstInfo}>
          <div>
            <span className={styles.playCounts}>
              조회수 {this.numberWithCommas(statistics.viewCount)} 회
            </span>
            <span className={styles.publishedDate}>
              {snippet.publishedAt.slice(0, 10).replace(/-/g, '.')}
            </span>
          </div>
          <div className={styles.thumbs}>
            <i class='fas fa-thumbs-up'></i>
            <span className={styles.likeThumb}>
              {statistics.likeCount
                ? this.numberWithCommas(statistics.likeCount)
                : '좋아요'}
            </span>
            <i class='fas fa-thumbs-down'></i>
            <span>
              {statistics.dislikeCount
                ? this.numberWithCommas(statistics.dislikeCount)
                : '싫어요'}
            </span>
          </div>
        </div>
        <div className={styles.secondInfo}>
          <h2 className={styles.channelTitle}>{snippet.channelTitle}</h2>
          <div className={`${styles.description} ${expand}`}>
            {snippet.description}
          </div>
          <button className={styles.button} onClick={this.toggleExpand}>
            더보기
          </button>
        </div>
      </>
    );
  }
}

export default Content;
