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

  const loadHandler = async () => {
    const videos = await youtube.mostPopular();
    const videosWithThumb = await youtube.channels(videos);
    setVideos(() => videosWithThumb);
  };

  useEffect(async () => {
    await loadHandler();
  }, []);

  const handleVideoClick = async (video) => {
    const result = await youtube.findVideo(video.id);
    videos.forEach((video) => {
      if (result.channelId === video.channelId) {
        result.channelThumbnail = video.channelThumbnail;
      }
    });
    console.log("res:", result);
    setSelectedVideo(() => result);
    window.scrollTo(0, 0);
  };

  const handleSearchClick = async (keyword) => {
    const videos = await youtube.search(keyword); //
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
          <VideoList
            videos={videos}
            onVideoClick={handleVideoClick}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
