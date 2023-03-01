import axios from "axios";

class YoutubeClient {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: {
        key: key,
        maxResults: 30,
        regionCode: "KR",
      },
    });
  }
  async videos(params) {
    return await this.youtube.get("videos", params);
  }
  async search(params) {
    return await this.youtube.get("search", params);
  }
  async channels(params) {
    return await this.youtube.get("channels", params);
  }
}

export default YoutubeClient;
