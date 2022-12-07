import { render, screen } from "@testing-library/react";
import Photo from "./Photo";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Photo", () => {
  const post = {
    id: 1,
    imageLink: "link",
    description: "nice!",
  };
  const comments = {
    1: ["nice pic", "hey!"],
  };
  test("renders correctly", () => {
    render(<Photo post={post} comments={comments} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByRole("paragraph")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("comment-count")).toBeInTheDocument();
  });
});
