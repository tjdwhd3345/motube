import React, { Component } from 'react';

class Video extends Component {
  snippet = this.props.snippet;
  render() {
    return (
      <li className='video-item'>
        <div className='video-thumbnail'>
          <img
            src={this.snippet.thumbnails.default.url}
            alt=''
            className='thumbnail-img'
          />
        </div>
        <div className='video-title'>
          <span className='video-title-text'>{this.snippet.title}</span>
        </div>
      </li>
    );
  }
}

export default Video;
