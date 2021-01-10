import React, { Component } from 'react';
import styles from './content.module.css';

class Content extends Component {
  render() {
    console.log('content.jsx render');
    const src = `https://www.youtube.com/embed/${this.props.selectedVideo.id}?autoplay=1&origin=http://localhost:3000`;
    const snippet = this.props.selectedVideo.snippet;
    return (
      <>
        <section className={styles.detail}>
          <iframe
            id='ytplayer'
            src={src}
            title='motube video player'
            frameBorder='0'
            width='100%'
            height='500'
            allowFullScreen
            className={styles.video}
          ></iframe>
        </section>
        <h2 className={styles.title}>{snippet.title}</h2>
        <span className={styles.playCounts}>조회수 10000회</span>
        <span className={styles.publishedDate}>
          {snippet.publishedAt.slice(0, 10).replaceAll('-', '.')}
        </span>
        <hr />
        <h2 className={styles.channelTitle}>{snippet.channelTitle}</h2>
        <pre className={styles.description}>{snippet.description}</pre>
      </>
    );
  }
}

export default Content;
