import React, { Component } from 'react';
import styles from './app.module.css';
import Content from './components/content';
import Header from './components/header/header';
import VideoList from './components/video_list/videolist';

class App extends Component {
  state = {
    showContent: false,
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

  handleVideoClick = (videoId) => {
    console.log('handleVideoClick:', videoId);
    // this.setState({ contentId: videoId });
  };

  handleSearchClick = (keyword) => {
    this.youtube
      .search(keyword) //
      .then((videos) => {
        this.setState({ videos });
      });
  };

  render() {
    return (
      <div className={styles.app}>
        <Header onSearchClick={this.handleSearchClick} />
        <VideoList
          videos={this.state.videos}
          onVideoClick={this.handleVideoClick}
        />
        {this.state.showContent && <Content contentId={this.state.contentId} />}
      </div>
    );
  }
}

export default App;
