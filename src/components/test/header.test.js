import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../header/header";

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  // it("로고 클릭 시 /motube로 이동", () => {
  //   render(<Header />);

  //   const logo = screen.getAllByRole("img")[0];
  //   userEvent.click(logo);
  //   expect(location.pathname).toBe("/motube");
  // });

  it("input 입력 후 검색 확인", () => {
    const onSearchClick = jest.fn();

    render(<Header onSearchClick={onSearchClick} />);

    const input = screen.getByRole("searchbox");
    const button = screen.getByRole("button");
    userEvent.type(input, "bts");
    userEvent.click(button);

    expect(onSearchClick).toHaveBeenCalledTimes(1);
    expect(onSearchClick).toHaveBeenCalledWith("bts");
  });
});
