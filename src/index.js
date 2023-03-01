import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/all.js";
import Youtube from "./service/youtube";
import App from "./app";
import "./index.css";

// eslint-disable-next-line no-undef
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY); // 컴포넌트 내에서 과도한 비즈니스 코드를 방지하기 위함.

ReactDOM.render(<App youtube={youtube} />, document.getElementById("root"));
