import React, { PureComponent } from 'react';
import Video from '../video_item/video';
import styles from './videolist.module.css';

class VideoList extends PureComponent {
  render() {
    console.log('videolist.jsx render');
    return (
      <>
        <ul className={styles.videos}>
          {this.props.videos.map((video) => {
            return (
              <Video
                key={video.id}
                video={video}
                onVideoClick={this.props.onVideoClick}
                display={this.props.display}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default VideoList;
