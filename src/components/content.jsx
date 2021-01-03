import React, { Component } from 'react';
import Infobox from './infobox';

class Content extends Component {
  src =
    'https://www.youtube.com/embed/' +
    this.props.contentId +
    '&autoplay=1&origin=http://127.0.0.1:3000';

  componentDidMount() {
    const tag = document.createElement('script');
    tag.src = 'https://www.yotube.com/iframe_api';
    document.head.append(tag);
  }

  render() {
    return (
      <div className='content'>
        <iframe
          id='ytplayer'
          type='text/html'
          src={this.src}
          title='content'
          frameBorder='0'
          className='video'
        ></iframe>
        <Infobox />
      </div>
    );
  }
}

export default Content;
