const { default: axios } = require('axios');

class Youtube {
  constructor(key) {
    this.key = key;
    this.url = 'https://youtube.googleapis.com/youtube/v3/';
    this.maxResults = 20;
    this.regionCode = 'KR';
  }

  async mostPopular() {
    try {
      const res = await axios.get(this.url + 'videos', {
        params: {
          key: this.key,
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: this.maxResults,
          regionCode: this.regionCode,
        },
      });
      const results = res.data.items;
      return results.map((result) => {
        return { id: result.id, snippet: result.snippet };
      });
    } catch (err) {
      console.error('get postPopular error:', err);
    }
  }

  async search(keyword) {
    try {
      const res = await axios.get(this.url + 'search', {
        params: {
          key: this.key,
          part: 'snippet',
          type: 'video',
          maxResults: this.maxResults,
          regionCode: this.regionCode,
          q: keyword,
        },
      });
      const results = res.data.items;
      return results.map((result) => {
        return { id: result.id.videoId, snippet: result.snippet };
      });
    } catch (err) {
      console.error('get search videos error:', err);
    }
  }
}

export default Youtube;
