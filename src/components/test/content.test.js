import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Content from "../content/content";

// props으로 selectedVideo가 주어져야 함. mocking 필요
const fakeSelectedVideo = {
  id: 1,
  snippet: {
    title: "test-title",
    publishedAt: "2022-12-20",
    channelTitle: "test-channel-title",
    description: "test-desc",
  },
  statistics: {
    viewCount: 99_999_999,
  },
  channelThumbnail: {
    url: "test-url",
  },
};

describe("Content", () => {
  it("renders correctly", () => {
    const selectedVideo = {
      ...fakeSelectedVideo,
      statistics: { ...fakeSelectedVideo.statistics, likeCount: 10_000_000, dislikeCount: 3_333 },
    };
    const { asFragment } = render(<Content selectedVideo={selectedVideo} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("iframe 속성 확인", () => {
    render(<Content selectedVideo={fakeSelectedVideo} />);

    const iframe = screen.getByTestId("iframe");
    expect(iframe.src).toBe(`https://www.youtube.com/embed/${fakeSelectedVideo.id}?autoplay=1`);
  });

  it("like, dislike가 없으면 좋아요, 싫어요 문구 표시", () => {
    render(<Content selectedVideo={fakeSelectedVideo} />);

    expect(screen.getByText("좋아요")).toBeInTheDocument();
    expect(screen.getByText("싫어요")).toBeInTheDocument();
  });

  it("영상 설명 더보기, 간략히 toggle 확인", async () => {
    render(<Content selectedVideo={fakeSelectedVideo} />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(screen.getByText("간략히")).toBeInTheDocument();
  });
});
