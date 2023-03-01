class Youtube {
  constructor(client) {
    this.apiClient = client;
  }

  async mostPopular() {
    try {
      const params = { part: "snippet,statistics", chart: "mostPopular" };
      const { data } = await this.apiClient.videos({ params });
      const { items: results } = data;
      return results.map((result) => {
        return {
          id: result.id,
          snippet: result.snippet,
          channelId: result.snippet.channelId,
          statistics: result.statistics,
        };
      });
    } catch (err) {
      console.error("get mostPopular error:", err);
    }
  }

  async search(keyword) {
    try {
      const params = { part: "snippet", type: "video", q: keyword };
      const { data } = await this.apiClient.search({ params });
      const { items: results } = data;
      console.log("search:", results);
      return results.map((result) => {
        return {
          id: result.id.videoId,
          snippet: result.snippet,
          channelId: result.snippet.channelId,
        };
      });
    } catch (err) {
      console.error("get search videos error:", err);
    }
  }

  async findVideo(videoId) {
    try {
      const params = { part: "snippet,statistics", id: videoId };
      console.log("findVideo:", videoId);
      const { data } = await this.apiClient.videos({ params });
      const { items: results } = data;
      console.log("findVideo results, ", results);
      const { id, snippet, statistics } = results[0];
      return { id, snippet, channelId: snippet.channelId, statistics };
    } catch (err) {
      console.error("get video error:", err);
    }
  }

  async channels(videos) {
    try {
      const promises = videos.map(async (video) => {
        return await this.apiClient.channels({
          params: {
            part: "snippet",
            id: video.channelId,
          },
        });
      });
      const results = await Promise.all(promises);
      const thumbnails = results.map((result) => {
        return {
          thumbnail: result.data.items[0].snippet.thumbnails.default,
          channelId: result.data.items[0].id,
        };
      });
      return videos.map((video, idx) => {
        if (video.channelId === thumbnails[idx].channelId) {
          video["channelThumbnail"] = thumbnails[idx].thumbnail;
        }
        return video;
      });
    } catch (err) {
      // console.err('get channel info:', err);
    }
  }
}

export default Youtube;
