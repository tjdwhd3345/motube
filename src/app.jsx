import axios from 'axios';
import React, { Component } from 'react';
import './app.css';
import Content from './components/content';
import Header from './components/header';
import VideoList from './components/videolist';

class App extends Component {
  state = {
    showContent: false,
    videos: [],
  };
  url = 'https://youtube.googleapis.com/youtube/v3/videos';
  key = 'AIzaSyDMH41LEzdH2pjqKYZkIIgCg4dpMJtcDAI';
  chart = 'mostPopular';
  maxResults = 25;
  query = 'bts';

  componentDidMount() {
    axios
      .get(this.url, {
        params: {
          key: this.key,
          part: 'snippet',
          chart: this.chart,
          maxResults: this.maxResults,
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
  render() {
    return (
      <>
        <Header />
        <VideoList videos={this.state.videos} />
        <Content />
      </>
    );
  }
}

export default App;
