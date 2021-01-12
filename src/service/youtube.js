const { default: axios } = require('axios');

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3/',
      params: {
        key: key,
        maxResults: 3,
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
      return results.map((result) => {
        return {
          id: result.id,
          snippet: result.snippet,
          channelId: result.snippet.channelId,
          statistics: result.statistics,
        };
      });
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
      console.log('results:', results);
      return results.map((result) => {
        return {
          thumbnails: result.data.items[0].snippet.thumbnails,
          statistics: result.data.items[0].statistics,
        };
      });
      /* for (let video of videos) {
        console.log('channels, ', video);
        const res = await this.youtube.get('channels', {
          params: {
            part: 'snippet,statistics',
            id: video.channelId,
          },
        });
        const results = res.data.items;
        console.log(results);
        return results.map((result) => {
          return {
            thumbnails: result.thumbnails,
            statistics: result.statistics,
          };
        });
      }
      return ''; */
    } catch (err) {
      // console.err('get channel info:', err);
    }
  }
}

export default Youtube;
