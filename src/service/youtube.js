const { default: axios } = require('axios');

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: {
        key: key,
        maxResults: 10,
        regionCode: 'KR',
      },
    });
  }

  async mostPopular() {
    try {
      const res = await this.youtube.get('videos', {
        params: {
          part: 'snippet,statistics',
          chart: 'mostPopular',
        },
      });
      const results = res.data.items;
      console.log('mostPopular:', results);
      return results.map((result) => {
        return {
          id: result.id,
          snippet: result.snippet,
          channelId: result.snippet.channelId,
          statistics: result.statistics,
        };
      });
    } catch (err) {
      console.error('get mostPopular error:', err);
    }
  }

  async search(keyword) {
    try {
      const res = await this.youtube.get('search', {
        params: {
          part: 'snippet',
          type: 'video',
          q: keyword,
        },
      });
      const results = res.data.items;
      return results.map((result) => {
        return {
          id: result.id.videoId,
          snippet: result.snippet,
        };
      });
    } catch (err) {
      console.error('get search videos error:', err);
    }
  }

  async findVideo(videoId) {
    try {
      console.log('findVideo:', videoId);
      const res = await this.youtube.get('videos', {
        params: {
          part: 'snippet,statistics',
          id: videoId,
        },
      });
      const results = res.data.items;
      console.log('video, ', results);
      return {
        id: results[0].id,
        snippet: results[0].snippet,
        channelId: results[0].snippet.channelId,
        statistics: results[0].statistics,
      };
    } catch (err) {
      console.error('get video error:', err);
    }
  }

  async channels(videos) {
    try {
      const promises = videos.map(async (video) => {
        return await this.youtube.get('channels', {
          params: {
            part: 'snippet',
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
          video['channelThumbnail'] = thumbnails[idx].thumbnail;
        }
        return video;
      });
    } catch (err) {
      // console.err('get channel info:', err);
    }
  }
}

export default Youtube;
