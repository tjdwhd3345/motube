import React, { Component } from 'react';
import Video from '../video_item/video';
import styles from './videolist.module.css';

class VideoList extends Component {
  render() {
    return (
      <>
        <div>
          <ul className={styles.videos}>
            {this.props.videos.map((video) => {
              return (
                <Video
                  key={video.id}
                  video={video}
                  onVideoClick={this.props.onVideoClick}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default VideoList;
