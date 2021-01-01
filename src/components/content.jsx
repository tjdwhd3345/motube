import React, { Component } from 'react';
import Infobox from './infobox';

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <iframe
          src=''
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
