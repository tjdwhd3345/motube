import React from "react";
import { render, screen } from "@testing-library/react";
import { youtube } from "../../service";
import videos from "../../data/videos.json";
import channel1 from "../../data/channel1.json";
import channel2 from "../../data/channel2.json";
import VideoList from "../video_list/videolist";

const onVideoClick = jest.fn();
jest.mock("../../service");

const channels = [channel1, channel2];

describe("VideoList", () => {
  beforeEach(() => {
    youtube.mostPopular.mockImplementation(() => videos.items);
    youtube.channels.mockImplementation(() =>
      videos.items.map((item, index) => ({
        ...item,
        channelThumbnail: channels[index].items[0].snippet.thumbnails.default,
      }))
    );
  });
  afterEach(() => {
    youtube.mostPopular.mockReset();
    youtube.channels.mockReset();
  });

  it("renders correctly", async () => {
    const { asFragment } = render(<VideoList onVideoClick={onVideoClick} />);

    await screen.findAllByRole("listitem");
    expect(asFragment()).toMatchSnapshot();
  });
});
