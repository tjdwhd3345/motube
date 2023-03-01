import Youtube from "./youtube";
import YoutubeClient from "./youtubeClient";

// eslint-disable-next-line no-undef
const youtubeClient = new YoutubeClient(process.env.REACT_APP_YOUTUBE_API_KEY);
export const youtube = new Youtube(youtubeClient); // 컴포넌트 내에서 과도한 비즈니스 코드를 방지하기 위함.
