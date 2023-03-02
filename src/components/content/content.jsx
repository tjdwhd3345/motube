import React, { useState } from "react";
import styles from "./content.module.css";

function Content({ selectedVideo }) {
  const { id, snippet, statistics, channelThumbnail } = selectedVideo;
  const [expand, setExpand] = useState(false);

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <section className={styles.detail}>
        <iframe
          id="ytplayer"
          data-testid="iframe"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="motube video player"
          frameBorder="0"
          allowFullScreen
          className={styles.video}
        ></iframe>
      </section>
      <h2 className={styles.title}>{snippet.title}</h2>
      <div className={styles.firstInfo}>
        <div>
          <span className={styles.playCounts}>
            조회수 {numberWithCommas(statistics.viewCount)} 회
          </span>
          <span className={styles.publishedDate}>
            {snippet.publishedAt.slice(0, 10).replace(/-/g, ".")}
          </span>
        </div>
        <div className={styles.thumbs}>
          <i className="fas fa-thumbs-up"></i>
          <span className={styles.likeThumb}>
            {statistics.likeCount ? numberWithCommas(statistics.likeCount) : "좋아요"}
          </span>
          <i className="fas fa-thumbs-down"></i>
          <span>
            {statistics.dislikeCount ? numberWithCommas(statistics.dislikeCount) : "싫어요"}
          </span>
        </div>
      </div>
      <div className={styles.secondInfo}>
        <div className={styles.channel}>
          <img
            className={styles.channelThumbnail}
            src={`${channelThumbnail.url}`}
            alt="channelThumbnail"
          />
          <span className={styles.channelTitle}>{snippet.channelTitle}</span>
        </div>
        <div className={`${styles.description} ${expand ? styles.expand : ""}`}>
          {snippet.description}
        </div>
        <button className={styles.button} onClick={() => setExpand((prev) => !prev)}>
          {expand ? "간략히" : "더보기"}
        </button>
      </div>
    </>
  );
}

export default Content;
