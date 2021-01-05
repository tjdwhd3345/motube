import React, { Component } from 'react';
import Infobox from '../infobox/infobox';
import styles from './content.module.css';

class Content extends Component {
  render() {
    const src = `https://www.youtube.com/embed/${this.props.selectedVideo.id}?autoplay=1&origin=http://localhost:3000&`;
    return (
      <div className={styles.content}>
        <iframe
          id='ytplayer'
          src={src}
          title='content'
          frameBorder='0'
          width='640'
          height='360'
          allowFullScreen
          className={styles.video}
        ></iframe>
        <Infobox details={this.props.selectedVideo.snippet} />
      </div>
    );
  }
}

export default Content;
