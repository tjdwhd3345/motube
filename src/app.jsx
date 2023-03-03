import React, { useState, useEffect } from "react";
import Content from "./components/content/content";
import Header from "./components/header/header";
import VideoList from "./components/video_list/videolist";
import { youtube } from "./service";
import styles from "./app.module.css";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [contentId, setContentId] = useState("");
  const [videos, setVideos] = useState([]);

  const handleVideoClick = async (video) => {
    const videos = await youtube.findVideo(video.id);
    const videosWithChannelThumbnail = await youtube.channels(videos);
    console.log("res:", videos);
    setSelectedVideo(() => videosWithChannelThumbnail);
    window.scrollTo(0, 0);
  };

  const handleSearchClick = async (keyword) => {
    const videos = await youtube.search(keyword);
    const videosWithThumb = await youtube.channels(videos);
    setVideos(() => videosWithThumb);
    setSelectedVideo(() => null);
  };

  return (
    <div className={styles.app}>
      <Header onSearchClick={handleSearchClick} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Content selectedVideo={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList onVideoClick={handleVideoClick} display={selectedVideo ? "list" : "grid"} />
        </div>
      </section>
    </div>
  );
}

export default App;
