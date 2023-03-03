import React, { useEffect, useState } from "react";
import { youtube } from "../../service";
import Video from "../video_item/video";
import styles from "./videolist.module.css";

function VideoList({ onVideoClick, display }) {
  const [videos, setVideos] = useState([]);

  const loadHandler = async () => {
    const videos = await youtube.mostPopular();
    const videosWithChannelThumbnail = await youtube.channels(videos);
    setVideos(() => videosWithChannelThumbnail);
  };

  useEffect(async () => {
    await loadHandler();
  }, []);

  console.log("videolist.jsx render");
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <Video key={video.id} video={video} onVideoClick={onVideoClick} display={display} />
      ))}
    </ul>
  );
}

export default VideoList;
