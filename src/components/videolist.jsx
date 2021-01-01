import React, { Component } from 'react';
import Video from './video';

class VideoList extends Component {
  render() {
    return (
      <>
        <div className='videos'>
          <ul className='video-list'>
            {this.props.videos.map((video) => {
              return <Video key={video.id} snippet={video.snippet} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default VideoList;
