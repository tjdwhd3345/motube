import React, { Component } from 'react';
import styles from './app.module.css';
import Content from './components/content/content';
import Header from './components/header/header';
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
        this.setState({ selectedVideo: null });
        this.setState({ videos });
      });
  };

  render() {
    console.log('app.jsx render');
    return (
      <div className={styles.app}>
        <Header onSearchClick={this.handleSearchClick} />
        <section className={styles.content}>
          {this.state.selectedVideo && (
            <div className={styles.detail}>
              <Content selectedVideo={this.state.selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={this.state.videos}
              onVideoClick={this.handleVideoClick}
              display={this.state.selectedVideo ? 'list' : 'grid'}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
