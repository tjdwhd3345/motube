import React, { Component } from 'react';
import styles from './app.module.css';
import Content from './components/content/content';
import Header from './components/header/header';
import Infobox from './components/infobox/infobox';
import VideoList from './components/video_list/videolist';

class App extends Component {
  state = {
    selectedVideo: null,
    contentId: '',
    videos: [],
  };
  youtube = this.props.youtube;

  componentDidMount() {
    this.youtube
      .mostPopular() //
      .then((videos) => {
        this.setState({ videos });
      });
  }

  handleVideoClick = (video) => {
    console.log('handleVideoClick:', video);

    this.setState({ selectedVideo: video });
  };

  handleSearchClick = (keyword) => {
    this.youtube
      .search(keyword) //
      .then((videos) => {
        this.setState({ videos });
      });
    this.setState({ showContent: false });
  };

  render() {
    return (
      <div className={styles.app}>
        <Header onSearchClick={this.handleSearchClick} />
        {this.state.selectedVideo && (
          <Content selectedVideo={this.state.selectedVideo} />
        )}
        <VideoList
          videos={this.state.videos}
          onVideoClick={this.handleVideoClick}
        />
      </div>
    );
  }
}

export default App;
