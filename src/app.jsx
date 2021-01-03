import axios from 'axios';
import React, { Component } from 'react';
import './app.css';
import Content from './components/content';
import Header from './components/header/header';
import VideoList from './components/video_list/videolist';

class App extends Component {
  state = {
    showContent: false,
    contentId: '',
    videos: [],
  };
  url = 'https://youtube.googleapis.com/youtube/v3/';
  key = 'AIzaSyDMH41LEzdH2pjqKYZkIIgCg4dpMJtcDAI';
  chart = 'mostPopular';
  maxResults = 20;
  query = 'bts';
  regionCode = 'KR';

  componentDidMount() {
    axios
      .get(this.url + 'videos', {
        params: {
          key: this.key,
          part: 'snippet',
          chart: this.chart,
          maxResults: this.maxResults,
          regionCode: this.regionCode,
          q: this.query,
        },
      })
      .then((res) => {
        // console.log('res:', res);
        console.log(res.data.items);
        const results = res.data.items;
        const videos = results.map((result) => {
          return { id: result.id, snippet: result.snippet };
        });
        console.log('videos', videos);
        this.setState({ videos });
      })
      .catch((err) => {
        console.error('get postPopular error:', err);
      });
  }

  handleVideoClick = (videoId) => {
    console.log('handleVideoClick:', videoId);
    this.setState({ contentId: videoId });
  };

  handleSearchClick = (keyword) => {
    this.setState({ showContent: false });
    axios
      .get(this.url + 'search', {
        params: {
          key: this.key,
          part: 'snippet',
          maxResults: this.maxResults,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => {
        // console.log('res:', res);
        console.log(res.data.items);
        const results = res.data.items;
        const videos = results.map((result) => {
          return { id: result.id.videoId, snippet: result.snippet };
        });
        console.log('videos', videos);
        this.setState({ videos });
      })
      .catch((err) => {
        console.error('get search videos error:', err);
      });
  };

  render() {
    return (
      <>
        <Header onSearchClick={this.handleSearchClick} />
        <VideoList
          videos={this.state.videos}
          onVideoClick={this.handleVideoClick}
        />
        {this.state.showContent && <Content contentId={this.state.contentId} />}
      </>
    );
  }
}

export default App;
