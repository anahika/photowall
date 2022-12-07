import { render, screen } from "@testing-library/react";
import Single from "./Single";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: 1,
  }),
}));

// mocking the photo component
jest.mock("../photo/Photo", () => () => <div data-testid="photo" />);

// mocking the comment component
jest.mock("../comments/Comment", () => () => <div data-testid="comment" />);

describe("Single", () => {
  const posts = [
    {
      id: 1,
      imageLink: "link",
      description: "nice!",
    },
    {
      id: 2,
      imageLink: "link1",
      description: "nice1!",
    },
  ];

  const posts1 = [];

  const comments = {
    1: ["nice pic", "hey!"],
  };
  test("renders loading message correctly", async () => {
    render(<Single posts={posts} comments={comments} />);
    // const loading = await screen.findByTestId("loading");
    // expect(loading).toBeInTheDocument();
  });

  test("renders post and comments and hide no post div", async () => {
    render(<Single posts={posts} comments={comments} />);
    const photo = await screen.findByTestId(/photo/);
    expect(photo).toBeInTheDocument();
    const comment = await screen.findByTestId(/comment/);
    expect(comment).toBeInTheDocument();
    const noPost = screen.queryByTestId("no-post");
    expect(noPost).not.toBeInTheDocument();
  });

  test("renders no post div and hide post", async () => {
    render(<Single posts={posts1} comments={comments} />);
    const noPost = await screen.findByTestId("no-post");
    expect(noPost).toBeInTheDocument();
    const photo = screen.queryByTestId(/photo/);
    expect(photo).not.toBeInTheDocument();
    const comment = screen.queryByTestId(/comment/);
    expect(comment).not.toBeInTheDocument();
  });
});
